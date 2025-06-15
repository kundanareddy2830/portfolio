import { QueryClient, QueryFunction } from "@tanstack/react-query";

const API_URL = "https://backend-milv.onrender.com";

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  const fullUrl = url.startsWith("http") ? url : `${API_URL}${url}`;
  console.log('Making request to:', fullUrl, 'with method:', method);
  
  const headers: HeadersInit = {
    'Accept': 'application/json',
    ...(data ? { 'Content-Type': 'application/json' } : {})
  };

  const res = await fetch(fullUrl, {
    method,
    headers,
    body: data ? JSON.stringify(data) : undefined,
    mode: 'cors',
    credentials: 'omit' // Changed from 'include' to 'omit' since we don't need cookies
  });

  console.log('Response status:', res.status);
  const responseText = await res.text();
  console.log('Response text:', responseText);

  if (!res.ok) {
    throw new Error(`${res.status}: ${responseText}`);
  }

  // Create a new Response with the text we already read
  return new Response(responseText, {
    status: res.status,
    statusText: res.statusText,
    headers: res.headers
  });
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    const res = await fetch(queryKey[0] as string, {
      credentials: "include",
    });

    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);
    return await res.json();
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});

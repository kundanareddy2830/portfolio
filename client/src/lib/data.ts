export const portfolioData = {
  name: "Kundana Reddy Tamma",
  title: "Full Stack Developer & AI/ML Enthusiast",
  description: "AI & Web Developer passionate about building smart, user-focused applications. Blending machine intelligence with clean, responsive design to solve real-world problems.",
  bio: {
    short: "I'm a passionate AI & Web Developer driven by the goal of creating smart, intuitive, and impactful digital experiences. Currently pursuing a B.Tech in Artificial Intelligence and Machine Learning, I bring together the power of AI and modern web technologies to build innovative, user-centric applications.",
    detailed: [
      "What started as a curiosity about how machines can think has evolved into a dedication to developing intelligent systems that enhance everyday interactions. I focus on building applications that are not only functional and efficient, but also clean, responsive, and accessible to all.",
      "My expertise spans across machine learning algorithms, web development frameworks, and modern deployment technologies. I'm constantly exploring new ways to integrate AI capabilities into web applications to create more intelligent and personalized user experiences."
    ]
  },
  stats: {
    projects: "15+",
    experience: "2+",
    clients: "10+"
  },
  contact: {
    email: "kundanareddytamma@gmail.com",
    phone: "+91 6304461919",
    location: "Vijayawada, Andhra Pradesh, India"
  },
  social: {
    github: "https://github.com/kundanareddy2830",
    linkedin: "https://www.linkedin.com/in/kundanareddytamma",
    twitter: "#",
    email: "mailto:kundanareddytamma@gmail.com"
  },
  skills: {
    frontend: [
      { name: "React", icon: "fab fa-react", color: "text-blue-500" },
      { name: "JavaScript", icon: "fab fa-js", color: "text-yellow-500" },
      { name: "HTML5", icon: "fab fa-html5", color: "text-orange-500" },
      { name: "CSS3", icon: "fab fa-css3-alt", color: "text-blue-500" },
      { name: "Node.js", icon: "fab fa-node-js", color: "text-green-500" }
    ],
    aiml: [
      { name: "Artificial Intelligence", icon: "fas fa-brain", color: "text-purple-600" },
      { name: "Machine Learning", icon: "fas fa-robot", color: "text-blue-600" },
      { name: "Deep Learning", icon: "fas fa-network-wired", color: "text-indigo-600" },
      { name: "Computer Vision", icon: "fas fa-eye", color: "text-orange-600" },
      { name: "NLP", icon: "fas fa-comments", color: "text-green-600" },
      { name: "Generative AI", icon: "fas fa-magic", color: "text-pink-600" }
    ],
    programming: [
      { name: "Python", icon: "fab fa-python", color: "text-yellow-500" },
      { name: "C", icon: "fas fa-code", color: "text-blue-700" },
      { name: "Java", icon: "fab fa-java", color: "text-red-600" },
      { name: "SQL", icon: "fas fa-database", color: "text-blue-700" },
      { name: "Data Structures", icon: "fas fa-sitemap", color: "text-purple-500" }
    ],
    frameworks: [
      { name: "TensorFlow", icon: "fas fa-brain", color: "text-orange-500" },
      { name: "PyTorch", icon: "fas fa-fire", color: "text-red-500" },
      { name: "Keras", icon: "fas fa-layer-group", color: "text-red-400" },
      { name: "OpenCV", icon: "fas fa-camera", color: "text-green-500" },
      { name: "OpenAI API", icon: "fas fa-robot", color: "text-green-600" }
    ],
    cloud: [
      { name: "AWS", icon: "fab fa-aws", color: "text-orange-500" },
      { name: "Cloud Computing", icon: "fas fa-cloud", color: "text-blue-400" },
      { name: "Data Science", icon: "fas fa-chart-bar", color: "text-green-600" },
      { name: "Big Data", icon: "fas fa-database", color: "text-purple-600" }
    ]
  },
  education: {
    degree: {
      institution: "Dhanekula Institute of Engineering and Technology, Vijayawada",
      program: "B.Tech in Artificial Intelligence & Machine Learning",
      duration: "2023 - 2027",
      courses: [
        "Artificial Intelligence",
        "Machine Learning", 
        "Web Development",
        "Data Structures & Algorithms",
        "Computer Vision"
      ]
    },
    certifications: [
      { name: "Artificial Intelligence Fundamentals", provider: "IBM" },
      { name: "Applications of AI", provider: "Great Learning" },
      { name: "Big Data Technologies and Applications", provider: "Coursera" },
      { name: "Introduction to Large Language Models", provider: "Google Cloud" },
      { name: "ChatGPT for Beginners", provider: "Great Learning" },
      { name: "Neural Networks and Deep Learning", provider: "Great Learning" },
      { name: "Data Structures", provider: "Infosys" },
      { name: "OpenCV Certification", provider: "OpenCV University" },
      { name: "Fundamentals of Generative AI", provider: "Microsoft" }
    ]
  },
  projects: [
    {
      id: 1,
      title: "Movie Recommender System",
      description: "Built a content-based movie recommendation system using user preferences. Integrated TMDB API and deployed using Streamlit with intelligent recommendation algorithms.",
      shortDescription: "AI-powered movie recommendations using machine learning",
      image: "@assets/1_1749633968603.jpg",
      technologies: ["Python", "Streamlit", "Pandas", "TMDB API", "Pickle"],
      demoUrl: "https://movierecommendation-system28.streamlit.app/",
      githubUrl: "https://github.com/kundanareddy2830/movie_recommendation-system.git"
    },
    {
      id: 2,
      title: "Object Detection System",
      description: "Developed a real-time object detection web app using YOLOv8 and webcam/image input. Created an intuitive UI with adjustable detection settings.",
      shortDescription: "Real-time object detection with YOLOv8 integration",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["Streamlit", "OpenCV", "YOLOv8", "PIL", "NumPy"],
      demoUrl: "https://object-detection-28.streamlit.app/",
      githubUrl: "https://github.com/kundanareddy2830/object-detection.git"
    },
    {
      id: 3,
      title: "Adaptive Quiz App",
      description: "A React-based quiz application that intelligently adapts question difficulty based on user performance. Features a modern, animated UI with engaging interactions.",
      shortDescription: "Smart quiz app with adaptive difficulty system",
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["React.js", "CSS", "HTML"],
      demoUrl: "https://kundanareddy2830.github.io/quiz/",
      githubUrl: "https://github.com/kundanareddy2830/quiz.git"
    },
    {
      id: 4,
      title: "Swipe-Based Learning Recommendation",
      description: "A modern, interactive application that helps users discover personalized learning techniques through an intuitive swipe interface. The system intelligently learns from user preferences.",
      shortDescription: "Personalized learning recommendations with swipe interface",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["React.js", "HTML", "CSS"],
      demoUrl: "https://kundanareddy2830.github.io/swipe-based-recommender/",
      githubUrl: "https://github.com/kundanareddy2830/swipe-based-recommender.git"
    },
    {
      id: 5,
      title: "Interactive Chess Game",
      description: "Created a fully functional chess game with interactive UI and logic. Implemented turn-based system, piece selection, and valid move handling with elegant design.",
      shortDescription: "Full-featured chess game with interactive gameplay",
      image: "@assets/3_1749633979983.jpg",
      technologies: ["JavaScript", "HTML", "CSS", "jQuery"],
      demoUrl: "https://kundanareddy2830.github.io/chess-game/",
      githubUrl: "https://github.com/kundanareddy2830/chess-game.git"
    },
    {
      id: 6,
      title: "Spotify Music Interface",
      description: "Built a responsive music player with sleek UI and basic functionality. Features include playlist management, responsive design, and modern interface elements.",
      shortDescription: "Modern music player with responsive design",
      image: "@assets/5_1749634003147.jpg",
      technologies: ["HTML", "CSS", "JavaScript"],
      demoUrl: "https://kundanareddy2830.github.io/spotify-UI/",
      githubUrl: "https://github.com/kundanareddy2830/spotify-UI.git"
    },
    {
      id: 7,
      title: "Music Playlist Player",
      description: "Built a responsive music player with sleek UI and basic functionality. Features playlist management, audio controls, and modern interface design.",
      shortDescription: "Interactive music playlist with audio controls",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["HTML", "CSS", "JavaScript"],
      demoUrl: "https://kundanareddy2830.github.io/Playlist/",
      githubUrl: "https://github.com/kundanareddy2830/Playlist.git"
    },
    {
      id: 8,
      title: "Simon Says Game",
      description: "Developed a memory-based Simon Says game with event-driven programming. Features interactive gameplay, sound effects, and progressive difficulty levels.",
      shortDescription: "Classic memory game with interactive design",
      image: "@assets/4_1749634039527.jpg",
      technologies: ["JavaScript", "HTML", "CSS"],
      demoUrl: "https://kundanareddy2830.github.io/simon-game/",
      githubUrl: "https://github.com/kundanareddy2830/simon-game.git"
    },
    {
      id: 9,
      title: "Chat Application Interface",
      description: "Built a chat UI with sidebar navigation, message bubbles, and mobile-friendly design. Features responsive layout and modern messaging interface.",
      shortDescription: "Modern chat interface with responsive design",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["HTML", "CSS", "JavaScript"],
      demoUrl: "https://kundanareddy2830.github.io/Chat-Application/",
      githubUrl: "https://github.com/kundanareddy2830/Chat-Application.git"
    }
  ]
};

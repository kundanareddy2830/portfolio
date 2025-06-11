import { useState } from "react";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Dribbble, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { apiRequest } from "@/lib/queryClient";
import { portfolioData } from "@/lib/data";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      setSubmitStatus("success");
      form.reset();
      setTimeout(() => setSubmitStatus(null), 5000);
    },
    onError: (error) => {
      console.error("Contact form error:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 5000);
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-4">Get In Touch</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Let's Connect</h3>
              <p className="text-lg text-slate-600 mb-8">
                I'm always interested in hearing about new opportunities, creative projects, or just having a friendly chat about technology and design.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Email</h4>
                  <p className="text-slate-600">{portfolioData.contact.email}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Phone</h4>
                  <p className="text-slate-600">{portfolioData.contact.phone}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Location</h4>
                  <p className="text-slate-600">{portfolioData.contact.location}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="font-semibold text-slate-800 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href={portfolioData.social.github}
                  className="w-12 h-12 bg-slate-200 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={20} />
                </a>
                <a
                  href={portfolioData.social.linkedin}
                  className="w-12 h-12 bg-slate-200 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={portfolioData.social.twitter}
                  className="w-12 h-12 bg-slate-200 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-slate-200 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Dribbble size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    {...form.register("name")}
                    placeholder="Your Name"
                    className="w-full"
                  />
                  {form.formState.errors.name && (
                    <p className="text-red-600 text-sm mt-1">{form.formState.errors.name.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...form.register("email")}
                    placeholder="your@email.com"
                    className="w-full"
                  />
                  {form.formState.errors.email && (
                    <p className="text-red-600 text-sm mt-1">{form.formState.errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                  Subject *
                </Label>
                <Input
                  id="subject"
                  {...form.register("subject")}
                  placeholder="Project Inquiry"
                  className="w-full"
                />
                {form.formState.errors.subject && (
                  <p className="text-red-600 text-sm mt-1">{form.formState.errors.subject.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  {...form.register("message")}
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none"
                />
                {form.formState.errors.message && (
                  <p className="text-red-600 text-sm mt-1">{form.formState.errors.message.message}</p>
                )}
              </div>

              {/* Form Status Messages */}
              {submitStatus === "success" && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg flex items-center">
                  <CheckCircle size={16} className="mr-2" />
                  <span>Thank you! Your message has been sent successfully.</span>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg flex items-center">
                  <AlertCircle size={16} className="mr-2" />
                  <span>Sorry, there was an error sending your message. Please try again.</span>
                </div>
              )}

              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-primary text-white py-4 px-8 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {contactMutation.isPending ? (
                  <>
                    <Loader2 size={16} className="mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

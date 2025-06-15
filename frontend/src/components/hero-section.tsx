import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "@/lib/data";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId) as HTMLElement;
    if (section) {
      const offsetTop = section.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-purple-600 to-purple-800"
    >
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-2 text-primary-foreground/90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Hi, I'm
          </motion.p>
          <motion.h1
            className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {portfolioData.name}
          </motion.h1>
          
          <motion.p
            className="text-xl sm:text-2xl lg:text-3xl mb-8 text-primary-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {portfolioData.title}
          </motion.p>
          
          <motion.p
            className="text-lg sm:text-xl mb-12 max-w-3xl mx-auto text-primary-foreground/90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {portfolioData.description}
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a
              href={portfolioData.social.github}
              className="p-3 rounded-full glassmorphism bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} />
            </a>
            <a
              href={portfolioData.social.linkedin}
              className="p-3 rounded-full glassmorphism bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={portfolioData.social.email}
              className="p-3 rounded-full glassmorphism bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <button
              onClick={() => scrollToSection("#projects")}
              className="bg-white text-slate-800 px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 hover:scale-105"
            >
              View My Work
            </button>
            <a
              href="/images/projects/my-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-800 transition-all duration-300 flex items-center justify-center"
            >
              View CV
            </a>
            <a
              href="/images/projects/my-resume.pdf"
              download
              className="bg-white text-slate-800 px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 hover:scale-105 flex items-center justify-center"
            >
              Download CV
            </a>
            <button
              onClick={() => scrollToSection("#contact")}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-800 transition-all duration-300"
            >
              Get In Touch
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}

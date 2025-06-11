import { Github, Linkedin, Twitter, Dribbble } from "lucide-react";
import { portfolioData } from "@/lib/data";
import type { FC } from "react";

const Footer: FC = () => {
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
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Portfolio
            </h3>
            <p className="text-slate-300 mb-6">
              Creating digital experiences that make a difference. Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              <a
                href={portfolioData.social.github}
                className="text-slate-300 hover:text-accent transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </a>
              <a
                href={portfolioData.social.linkedin}
                className="text-slate-300 hover:text-accent transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={portfolioData.social.twitter}
                className="text-slate-300 hover:text-accent transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-accent transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Dribbble size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("#home")}
                  className="text-slate-300 hover:text-accent transition-colors duration-200"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#about")}
                  className="text-slate-300 hover:text-accent transition-colors duration-200"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#skills")}
                  className="text-slate-300 hover:text-accent transition-colors duration-200"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#education")}
                  className="text-slate-300 hover:text-accent transition-colors duration-200"
                >
                  Education
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#projects")}
                  className="text-slate-300 hover:text-accent transition-colors duration-200"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="text-slate-300 hover:text-accent transition-colors duration-200"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-slate-300">Web Development</li>
              <li className="text-slate-300">UI/UX Design</li>
              <li className="text-slate-300">Mobile Apps</li>
              <li className="text-slate-300">Consulting</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-600 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-300 text-sm">
              © 2025 — Built with ❤️ by Kundana Reddy
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-300 hover:text-accent text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-300 hover:text-accent text-sm transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { portfolioData } from "@/lib/data";

const ProjectCard = ({ project, index }: { project: any; index: number }) => (
  <motion.div
    className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
  >
    <div className="relative overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
      <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-200 text-sm mb-4">{project.description}</p>
        <div className="flex space-x-3">
          <a
            href={project.demoUrl}
            className="text-white hover:text-accent transition-colors flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={16} className="mr-1" /> Demo
          </a>
          <a
            href={project.githubUrl}
            className="text-white hover:text-accent transition-colors flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={16} className="mr-1" /> Code
          </a>
        </div>
      </div>
    </div>
    <div className="p-8 bg-white">
      <h3 className="text-2xl font-bold text-slate-800 mb-3">{project.title}</h3>
      <p className="text-slate-600 text-base mb-4">{project.shortDescription}</p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech: string) => (
          <span
            key={tech}
            className="px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

export default function ProjectsSection() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  
  // Show only first 4 projects initially, or all if showAllProjects is true
  const displayedProjects = showAllProjects ? portfolioData.projects : portfolioData.projects.slice(0, 4);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {portfolioData.projects.length > 4 && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <button 
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 hover:scale-105"
            >
              {showAllProjects ? (
                <>
                  Show Less <i className="fas fa-chevron-up ml-2"></i>
                </>
              ) : (
                <>
                  View More Projects <i className="fas fa-chevron-down ml-2"></i>
                </>
              )}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

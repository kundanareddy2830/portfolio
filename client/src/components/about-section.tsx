import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, User } from "lucide-react";
import { portfolioData } from "@/lib/data";

export default function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-4">About Me</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Passionate developer with {portfolioData.stats.experience} years of experience creating digital solutions that matter.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <p className="text-lg text-slate-700 leading-relaxed">
                {portfolioData.bio.short}
              </p>
            </div>

            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                {portfolioData.bio.detailed.map((paragraph, index) => (
                  <p key={index} className="text-lg text-slate-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </motion.div>
            )}

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-primary font-semibold hover:text-accent transition-colors duration-200 flex items-center"
            >
              <span>{isExpanded ? "Read Less" : "Read More"}</span>
              <ChevronDown
                size={16}
                className={`ml-1 transition-transform duration-200 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{portfolioData.stats.projects}</div>
                <div className="text-slate-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{portfolioData.stats.experience}</div>
                <div className="text-slate-600">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{portfolioData.stats.clients}</div>
                <div className="text-slate-600">Clients</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary to-accent p-1">
              <div className="w-full h-full bg-slate-100 rounded-xl flex items-center justify-center">
                <User size={96} className="text-slate-400" />
              </div>
            </div>
            {/* Floating elements for visual interest */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary rounded-full opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";

const SkillCard = ({ skill, index }: { skill: any; index: number }) => (
  <motion.div
    className="group cursor-pointer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
  >
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 text-center">
      <div className="relative">
        <i className={`${skill.icon} text-5xl ${skill.color} mb-4 transition-transform duration-300 group-hover:scale-110`}></i>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <h4 className="font-semibold text-slate-800 text-lg">{skill.name}</h4>
    </div>
  </motion.div>
);

const SkillCategory = ({ title, skills }: { title: string; skills: any[] }) => (
  <div className="skill-category">
    <motion.h3
      className="text-2xl font-semibold text-slate-800 mb-8 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {title}
    </motion.h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
      {skills.map((skill, index) => (
        <SkillCard key={skill.name} skill={skill} index={index} />
      ))}
    </div>
  </div>
);

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-4">Skills & Technologies</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A comprehensive toolkit spanning AI/ML, web development, and cloud technologies
          </p>
        </motion.div>

        <div className="space-y-12">
          <SkillCategory title="Frontend Development" skills={portfolioData.skills.frontend} />
          <SkillCategory title="AI & Machine Learning" skills={portfolioData.skills.aiml} />
          <SkillCategory title="Programming Languages" skills={portfolioData.skills.programming} />
          <SkillCategory title="Frameworks & Libraries" skills={portfolioData.skills.frameworks} />
          <SkillCategory title="Cloud & Data Technologies" skills={portfolioData.skills.cloud} />
        </div>
      </div>
    </section>
  );
}

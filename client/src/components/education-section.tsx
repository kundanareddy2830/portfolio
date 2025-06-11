import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";
import { portfolioData } from "@/lib/data";

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-4">Education & Certifications</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Academic foundation and professional certifications in AI, ML, and emerging technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Degree Section */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mr-4">
                <GraduationCap className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800">Current Education</h3>
                <p className="text-slate-600">Undergraduate Degree</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-slate-800">{portfolioData.education.degree.program}</h4>
              <div className="flex items-center text-slate-600 mb-2">
                <MapPin size={16} className="mr-2" />
                <span>{portfolioData.education.degree.institution}</span>
              </div>
              <div className="flex items-center text-slate-600 mb-4">
                <Calendar size={16} className="mr-2" />
                <span>{portfolioData.education.degree.duration}</span>
              </div>

              <div>
                <h5 className="font-semibold text-slate-800 mb-3">Relevant Coursework:</h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {portfolioData.education.degree.courses.map((course, index) => (
                    <div
                      key={index}
                      className="bg-slate-100 text-slate-700 px-3 py-2 rounded-lg text-sm"
                    >
                      {course}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center mr-4">
                <Award className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800">Professional Certifications</h3>
                <p className="text-slate-600">Industry Recognition</p>
              </div>
            </div>

            <div className="space-y-4 max-h-96 overflow-y-auto">
              {portfolioData.education.certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h5 className="font-semibold text-slate-800 mb-1">{cert.name}</h5>
                  <p className="text-sm text-slate-600">{cert.provider}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Summary */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Expertise Areas</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold">AI/ML</div>
                <div className="text-blue-100">Artificial Intelligence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">Web Dev</div>
                <div className="text-blue-100">Full Stack</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">Cloud</div>
                <div className="text-blue-100">AWS & Computing</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">Data</div>
                <div className="text-blue-100">Science & Analytics</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
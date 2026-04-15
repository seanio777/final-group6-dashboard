import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function Skills() {
  const [isInView, setIsInView] = useState(false);

  const skills = [
    { name: 'JavaScript / TypeScript', level: 90 },
    { name: 'React / Next.js', level: 85 },
    { name: 'Python', level: 88 },
    { name: 'Node.js / Express', level: 82 },
    { name: 'C++ / C', level: 80 },
    { name: 'Database (SQL/NoSQL)', level: 75 },
    { name: 'Cloud (AWS/Azure)', level: 70 },
    { name: 'DevOps / CI/CD', level: 72 },
  ];

  const tools = [
    { name: 'Git', icon: '🔧' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Linux', icon: '🐧' },
    { name: 'VS Code', icon: '💻' },
    { name: 'Figma', icon: '🎨' },
    { name: 'Postman', icon: '📮' },
  ];

  return (
    <section id="skills" className="min-h-screen py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="circuit-pattern" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onViewportEnter={() => setIsInView(true)}
        >
          <h2 className="section-title text-center mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-[#00ff00] mx-auto mb-12 neon-glow" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl mb-6 text-[#00ff00]">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-[#00ff00]">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-gray-800 rounded-full overflow-hidden neon-border-subtle">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#00ff00] to-[#00cc00] neon-glow"
                      initial={{ width: 0 }}
                      whileInView={{ width: isInView ? `${skill.level}%` : 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Platforms */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl mb-6 text-[#00ff00]">Tools & Platforms</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="futuristic-card p-6 text-center cursor-pointer group"
                >
                  <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                    {tool.icon}
                  </div>
                  <p className="text-gray-300 group-hover:text-[#00ff00] transition-colors duration-300">
                    {tool.name}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Circular Progress Indicators */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              {[
                { label: 'Projects', value: 25, suffix: '+' },
                { label: 'Experience', value: 3, suffix: ' yrs' },
                { label: 'Technologies', value: 15, suffix: '+' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="relative w-24 h-24 mx-auto mb-3">
                    <svg className="transform -rotate-90 w-24 h-24">
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="#1a1a1a"
                        strokeWidth="8"
                        fill="none"
                      />
                      <motion.circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="#00ff00"
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                        initial={{ strokeDashoffset: 251.2 }}
                        whileInView={{ strokeDashoffset: 50 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                        style={{
                          strokeDasharray: 251.2,
                          filter: 'drop-shadow(0 0 8px #00ff00)',
                        }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xl text-[#00ff00]">
                        {stat.value}{stat.suffix}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
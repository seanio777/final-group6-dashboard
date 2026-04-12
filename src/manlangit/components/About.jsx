import { motion } from 'motion/react'

export function About() {
  const personalInfo = [
    { label: 'Date of Birth',   value: 'July 20, 2006' },
    { label: 'Place of Birth',  value: 'Jose Panganiban, Camarines Norte, Bicol' },
    { label: 'Parents',         value: 'Myla Panganiban & Leroy Manlangit' },
    { label: 'Siblings',        value: '4 (Youngest/Bunso)' },
  ]

  const education = [
    { level: 'Elementary',        school: 'Jose Panganiban Elementary School' },
    { level: 'Junior High School', school: 'Jose Panganiban National High School', program: 'STE Program' },
    { level: 'Senior High School', school: 'Jose Panganiban National High School', program: 'STEM Strand' },
    { level: 'College (Current)',  school: 'Technological Institute of the Philippines – Manila', program: 'BS Computer Engineering' },
  ]

  const achievements = [
    { title: 'Winner – Regional and National Level', event: 'FedEx International Trade Challenge (ITC) 2023' },
    { title: 'International Competitor',             event: 'FedEx ITC Challenge 2023' },
    { title: 'Participant – Script Writer',          event: 'IPOPHL Filmmaking Competition 2025' },
    { title: 'Participant',                          event: 'Regional Chemistry Olympiad 2023' },
  ]

  const seminars = ['Cybersecurity Seminar', 'DTP Globe Training', 'Elective Seminar']

  return (
    <section id="about" className="min-h-screen py-20 relative">
      <div className="absolute inset-0 opacity-5"><div className="circuit-pattern" /></div>
      <div className="container mx-auto px-4 z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="section-title text-center mb-4">About Me</h2>
          <div className="w-20 h-1 bg-[#00ff00] mx-auto mb-12 neon-glow" />
        </motion.div>

        {/* Biography */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
          <div className="futuristic-card p-8 max-w-5xl mx-auto">
            <h3 className="text-2xl mb-6 text-[#00ff00] border-b border-[#00ff00]/30 pb-3">Biography</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Lance Kelly P. Manlangit was born in Jose Panganiban, Camarines Norte, Bicol on July 20, 2006.
              He is the youngest among five siblings, son of Myla Panganiban and Leroy Manlangit. He is currently
              pursuing a Bachelor of Science in Computer Engineering (BSCpE) at the Technological Institute of
              the Philippines – Manila, where he is a second-year student.
            </p>
          </div>
        </motion.div>

        {/* Objective */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="mb-12">
          <div className="futuristic-card p-8 max-w-5xl mx-auto">
            <h3 className="text-2xl mb-6 text-[#00ff00] border-b border-[#00ff00]/30 pb-3">Objective</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              As a Computer Engineering student, Lance aims to develop strong technical and analytical skills in
              the fields of computing, networking, and emerging technologies. He strives to contribute innovative
              solutions to real-world problems and continuously improve his knowledge in cybersecurity, software
              development, and system design.
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Personal Info */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="futuristic-card p-8 h-full">
              <h3 className="text-2xl mb-6 text-[#00ff00] border-b border-[#00ff00]/30 pb-3">Personal Information</h3>
              <div className="space-y-4">
                {personalInfo.map((info, i) => (
                  <motion.div key={info.label} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-800 pb-3">
                    <span className="text-[#00ff00] mb-1 sm:mb-0">{info.label}:</span>
                    <span className="text-gray-300 sm:text-right">{info.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Academic */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="futuristic-card p-8 h-full">
              <h3 className="text-2xl mb-6 text-[#00ff00] border-b border-[#00ff00]/30 pb-3">Academic Background</h3>
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <motion.div key={edu.level} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="border-l-2 border-[#00ff00]/50 pl-4 pb-3">
                    <h4 className="text-[#00ff00] mb-1">{edu.level}</h4>
                    <p className="text-gray-300 text-sm mb-1">{edu.school}</p>
                    {edu.program && <p className="text-gray-500 text-xs italic">{edu.program}</p>}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Achievements */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="futuristic-card p-8 h-full">
              <h3 className="text-2xl mb-6 text-[#00ff00] border-b border-[#00ff00]/30 pb-3">Achievements</h3>
              <div className="space-y-4">
                {achievements.map((a, i) => (
                  <motion.div key={a.event} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="border border-[#00ff00]/20 p-4 rounded-lg hover:border-[#00ff00]/50 transition-all duration-300">
                    <p className="text-[#00ff00] mb-1">{a.title}</p>
                    <p className="text-gray-400 text-sm">{a.event}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Seminars */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="futuristic-card p-8 h-full">
              <h3 className="text-2xl mb-6 text-[#00ff00] border-b border-[#00ff00]/30 pb-3">Seminars &amp; Trainings</h3>
              <div className="space-y-3">
                {seminars.map((s, i) => (
                  <motion.div key={s} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-center gap-3 group cursor-pointer">
                    <div className="w-2 h-2 bg-[#00ff00] rounded-full group-hover:scale-150 transition-transform duration-300 neon-glow" />
                    <p className="text-gray-300 group-hover:text-[#00ff00] transition-colors duration-300">{s}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
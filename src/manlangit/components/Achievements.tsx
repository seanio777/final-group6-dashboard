import { motion } from 'motion/react';
import { Award } from 'lucide-react';

export function Achievements() {
  const achievements = [
    {
      title: 'Best Web Application - Local Hackathon 2024',
      issuer: 'Tech Hub City',
      date: '2024',
      description: 'Won first place for innovative Enrollment UI System design demonstrating advanced React and responsive design skills.',
      badges: ['Web Dev', 'Hackathon', '1st Place']
    },
    {
      title: 'Student Tech Innovation Award',
      issuer: 'High School STEM Program',
      date: '2024',
      description: 'Recognized for exceptional technology projects and contributions to school coding club.',
      badges: ['Innovation', 'STEM', 'School Award']
    },
    {
      title: 'Project Excellence in Cybersecurity',
      issuer: 'School Science Fair 2024',
      date: '2024',
      description: 'Awarded for Cybersecurity Dashboard project showcasing advanced data visualization and security concepts.',
      badges: ['Cybersecurity', 'Science Fair', 'Excellence']
    },
    {
      title: 'Python Programming Proficiency Certification',
      issuer: 'CodeAcademy',
      date: '2023',
      description: 'Completed comprehensive Python programming course with certified proficiency in data structures and algorithms.',
      badges: ['Python', 'Programming', 'Certified']
    },
    {
      title: 'Blockchain Research & Innovation',
      issuer: 'School Research Competition',
      date: '2024',
      description: 'Presented Crypto-Pulse project, demonstrating advanced understanding of blockchain technology and Web3 concepts.',
      badges: ['Blockchain', 'Research', 'Presentation']
    },
    {
      title: 'Web Development Excellence Award',
      issuer: 'District Coding Competition',
      date: '2023',
      description: 'Top performer in web development category, showcasing proficiency in React, JavaScript, and responsive design.',
      badges: ['Web Dev', 'Competition', 'Top 3']
    },
    {
      title: 'Full Stack Project Showcase Winner',
      issuer: 'School Tech Expo 2023',
      date: '2023',
      description: 'Recognized for comprehensive full-stack projects demonstrating backend and frontend development expertise.',
      badges: ['Full Stack', 'Expo', 'Winner']
    },
    {
      title: 'IoT & Maker Space Recognition',
      issuer: 'School Innovation Lab',
      date: '2023',
      description: 'Honored for IoT projects using Raspberry Pi and Python, contributing to maker space community.',
      badges: ['IoT', 'Maker Space', 'Recognition']
    },
    {
      title: 'Coding Club Vice President',
      issuer: 'High School Leadership',
      date: '2023-2024',
      description: 'Elected leadership position, organizing coding events and mentoring junior students in programming.',
      badges: ['Leadership', 'Mentoring', 'Club Officer']
    },
    {
      title: 'Database Design Project Award',
      issuer: 'Computer Science Class',
      date: '2024',
      description: 'Created advanced database consultation system (DCMS) receiving highest project rating in class.',
      badges: ['Database', 'Project', 'A+ Grade']
    },
    {
      title: 'Frontend Development Skills Recognition',
      issuer: 'Coding Bootcamp 2024',
      date: '2024',
      description: 'Successfully completed advanced frontend bootcamp with focus on React, UI/UX, and responsive design.',
      badges: ['Frontend', 'Bootcamp', 'Completed']
    },
    {
      title: 'GitHub Student Developer Award',
      issuer: 'GitHub Education Program',
      date: '2024',
      description: 'Recognized as active student developer contributing to multiple repositories and open-source learning projects.',
      badges: ['Open Source', 'GitHub', 'Developer']
    }
  ];

  return (
    <section id="achievements" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center mb-4">Achievements & Awards</h2>
          <div className="w-20 h-1 bg-[#00ff00] mx-auto mb-12 neon-glow" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-lg border border-[#00ff00]/20 bg-black/40 backdrop-blur-sm hover:border-[#00ff00]/50 hover:bg-black/60 transition-all duration-300 neon-glow-subtle">
                {/* Header with Award Icon */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-[#00ff00]/10 text-[#00ff00] group-hover:bg-[#00ff00]/20 transition-colors duration-300">
                    <Award size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-[#00ff00] transition-colors duration-300 mb-1">
                      {achievement.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <span>{achievement.issuer}</span>
                      <span className="text-[#00ff00]/60">•</span>
                      <span>{achievement.date}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {achievement.description}
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                  {achievement.badges.map((badge) => (
                    <span
                      key={badge}
                      className="text-xs px-3 py-1 border border-[#00ff00]/30 text-[#00ff00] rounded-full hover:bg-[#00ff00]/10 transition-colors duration-300"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
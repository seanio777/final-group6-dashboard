import { motion } from 'motion/react';
import { Presentation, MapPin, Calendar, Users } from 'lucide-react';

export function Seminars() {
  const seminars = [
    {
      title: 'Introduction to Web Development with React',
      presenter: 'Self',
      date: 'March 2024',
      location: 'School Coding Club',
      attendees: '15+',
      description: 'Student-led workshop introducing peers to React fundamentals, component-based architecture, and building interactive web applications.',
      topics: ['React', 'JavaScript', 'Web Dev', 'Beginner']
    },
    {
      title: 'Blockchain Basics: From Bitcoin to Web3',
      presenter: 'Self',
      date: 'February 2024',
      location: 'School Tech Talk Series',
      attendees: '20+',
      description: 'Educational presentation on blockchain technology fundamentals, cryptocurrency, and introduction to smart contracts using Solidity.',
      topics: ['Blockchain', 'Web3', 'Crypto', 'Learning']
    },
    {
      title: 'Cybersecurity & Online Safety Workshop',
      presenter: 'Guest Speaker + Panel',
      date: 'January 2024',
      location: 'School Assembly',
      attendees: '150+',
      description: 'School-wide cybersecurity awareness workshop covering password security, phishing prevention, and digital safety best practices.',
      topics: ['Cybersecurity', 'Safety', 'Awareness', 'School Event']
    },
    {
      title: 'Data Science Basics with Python',
      presenter: 'Computer Science Teacher',
      date: 'December 2023',
      location: 'Coding Bootcamp (Summer)',
      attendees: '25+',
      description: 'Practical workshop on Python data manipulation, basic machine learning concepts, and data visualization techniques.',
      topics: ['Python', 'Data Science', 'Bootcamp', 'ML Intro']
    },
    {
      title: 'Git & GitHub for Beginners',
      presenter: 'Self',
      date: 'November 2023',
      location: 'School Coding Club',
      attendees: '18+',
      description: 'Workshop teaching version control fundamentals, GitHub workflows, and collaborative coding practices for student projects.',
      topics: ['Git', 'GitHub', 'Version Control', 'Collaboration']
    },
    {
      title: 'Database Design Fundamentals',
      presenter: 'Self',
      date: 'October 2023',
      location: 'Computer Science Class Project',
      attendees: '12+',
      description: 'Technical presentation on relational database design, SQL basics, and implementing databases in real-world applications.',
      topics: ['Database', 'SQL', 'PostgreSQL', 'Design']
    },
    {
      title: 'Mobile App Development: Getting Started',
      presenter: 'Tech Community Mentor',
      date: 'September 2023',
      location: 'Local Tech Meetup (Students)',
      attendees: '20+',
      description: 'Hands-on workshop introducing Flutter and React Native for building cross-platform mobile applications.',
      topics: ['Mobile Dev', 'Flutter', 'React Native', 'Beginner']
    },
    {
      title: 'IoT Projects with Raspberry Pi',
      presenter: 'Self',
      date: 'August 2023',
      location: 'School Maker Space',
      attendees: '16+',
      description: 'Practical workshop demonstrating IoT projects using Raspberry Pi, Python scripting, and real-time data collection systems.',
      topics: ['IoT', 'Raspberry Pi', 'Python', 'Hardware']
    },
    {
      title: 'UI/UX Design Principles & Tools',
      presenter: 'Guest Designer',
      date: 'July 2023',
      location: 'Coding Club Special Session',
      attendees: '22+',
      description: 'Introduction to user interface and user experience design principles, Figma basics, and designing responsive websites.',
      topics: ['UI/UX', 'Figma', 'Design', 'Responsive']
    },
    {
      title: 'Building REST APIs with Express.js',
      presenter: 'Self',
      date: 'June 2023',
      location: 'Advanced CS Workshop',
      attendees: '14+',
      description: 'Student-led session on building backend APIs, RESTful architecture principles, and connecting databases to web applications.',
      topics: ['REST API', 'Express.js', 'Backend', 'Node.js']
    },
    {
      title: 'Testing Your Code: Debugging & QA',
      presenter: 'CS Teacher',
      date: 'May 2023',
      location: 'School Computer Lab',
      attendees: '28+',
      description: 'Workshop on debugging techniques, writing unit tests, and quality assurance practices for robust software development.',
      topics: ['Testing', 'Debugging', 'Jest', 'QA']
    },
    {
      title: 'Open Source: How to Contribute',
      presenter: 'Self',
      date: 'April 2023',
      location: 'School Tech Fair',
      attendees: '19+',
      description: 'Beginner-friendly guide to finding open-source projects, making your first contribution, and joining tech communities.',
      topics: ['Open Source', 'GitHub', 'Community', 'Collaboration']
    }
  ];

  return (
    <section id="seminars" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center mb-4">Seminars & Workshops</h2>
          <div className="w-20 h-1 bg-[#00ff00] mx-auto mb-12 neon-glow" />
        </motion.div>

        <div className="space-y-6">
          {seminars.map((seminar, index) => (
            <motion.div
              key={seminar.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <div className="p-6 rounded-lg border border-[#00ff00]/20 bg-black/40 backdrop-blur-sm hover:border-[#00ff00]/50 hover:bg-black/60 transition-all duration-300 neon-glow-subtle">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-[#00ff00]/10 text-[#00ff00] group-hover:bg-[#00ff00]/20 transition-colors duration-300 flex-shrink-0">
                    <Presentation size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-[#00ff00] transition-colors duration-300 mb-2">
                      {seminar.title}
                    </h3>
                    <p className="text-gray-400 text-sm">Presented by: <span className="text-[#00ff00]/80">{seminar.presenter}</span></p>
                  </div>
                </div>

                {/* Details Grid */}
                <div className="grid md:grid-cols-4 gap-4 mb-4 py-4 border-y border-[#00ff00]/10">
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Calendar size={16} className="text-[#00ff00]" />
                    <span>{seminar.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <MapPin size={16} className="text-[#00ff00]" />
                    <span>{seminar.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Users size={16} className="text-[#00ff00]" />
                    <span>{seminar.attendees} attendees</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {seminar.description}
                </p>

                {/* Topics */}
                <div className="flex flex-wrap gap-2">
                  {seminar.topics.map((topic) => (
                    <span
                      key={topic}
                      className="text-xs px-3 py-1 border border-[#00ff00]/30 text-[#00ff00] rounded-full hover:bg-[#00ff00]/10 transition-colors duration-300"
                    >
                      {topic}
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
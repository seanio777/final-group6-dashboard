import { motion } from 'motion/react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export function Projects() {
  const projects = [
    {
      title: 'UI of Enrollment System',
      description: 'Web-based Ui- Enrollment System',
      tags: ['WebRTC', 'Socket.io', 'React', 'Express'],
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop',
      github: 'https://github.com/Ransuuuu/enrollment-ui-design.git',
      demo: 'https://enrollment-ui-design.vercel.app/'
    },
    {
      title: 'Login Dashboard',
      description: 'A cyber punk frontend design of login dashboard',
      tags: ['Python', 'Raspberry Pi', 'MQTT', 'Flutter'],
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop',
      github: 'https://github.com/lancemanlangit/Dashboard.git',
      demo: 'https://dashboard12-six.vercel.app/'
    },
    {
      title: 'Crypto-Pulse',
      description: 'Secure and transparent voting platform leveraging blockchain technology for elections.',
      tags: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop',
      github: 'https://github.com/Ransuuuu/Crypto-Pulse',
      demo: 'https://cryptopulse-theta-jet.vercel.app/'
    },
    {
      title: 'DCMS',
      description: 'A database management consultation system that provides efficient tools for managing and optimizing database performance.',
      tags: ['Python', 'FastAPI', 'TensorFlow', 'Vue.js'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      github: 'https://github.com/lancemanlangit/Database-Consultation-Management-System.git',
      demo: '#'
    },
    {
      title: 'Cybersecurity Dashboard',
      description: 'Real-time security monitoring dashboard with threat detection and analysis capabilities.',
      tags: ['React', 'D3.js', 'Python', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop',
      github: 'https://github.com/lancemanlangit/Cybersecurity-Dashboard.git',
      demo: 'https://cybersecuritydashboard-i6mn3jf6i-ransuuuus-projects.vercel.app/'
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center mb-4">Projects</h2>
          <div className="w-20 h-1 bg-[#00ff00] mx-auto mb-12 neon-glow" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="project-card group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-t-lg h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-black/80 rounded-full text-[#00ff00] hover:bg-[#00ff00] hover:text-black transition-all duration-300 neon-glow"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-black/80 rounded-full text-[#00ff00] hover:bg-[#00ff00] hover:text-black transition-all duration-300 neon-glow"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl mb-3 text-white group-hover:text-[#00ff00] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 border border-[#00ff00]/30 text-[#00ff00] rounded-full hover:bg-[#00ff00]/10 transition-colors duration-300"
                    >
                      {tag}
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
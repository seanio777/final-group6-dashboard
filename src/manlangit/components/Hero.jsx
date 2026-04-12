import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import profileImage from '../../assets/b79f33035dd07a060bd25a65d5f6f574d9c196c4.png'

export function Hero() {
  const [displayedText, setDisplayedText] = useState('')
  const fullText = "Aspiring Computer Engineer | Tech Enthusiast | Innovator"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)
    return () => clearInterval(timer)
  }, [])

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="grid-animation" />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00ff00] to-transparent"
          animate={{ opacity: [0.3, 1, 0.3], scaleX: [0.8, 1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00ff00] to-transparent"
          animate={{ opacity: [0.3, 1, 0.3], scaleX: [0.8, 1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl mb-6 neon-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              LANCE KELLY P. MANLANGIT
            </motion.h1>

            <div className="h-20 mb-8">
              <p className="text-xl md:text-2xl text-gray-300 font-mono">
                {displayedText}
                <span className="inline-block w-[2px] h-6 bg-[#00ff00] ml-1 animate-pulse" />
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex gap-4"
            >
              <a href="#contact" className="neon-button px-8 py-3 border-2 border-[#00ff00] text-[#00ff00] hover:bg-[#00ff00] hover:text-black transition-all duration-300">
                Get in Touch
              </a>
              <a href="#projects" className="px-8 py-3 border-2 border-gray-500 text-gray-300 hover:border-[#00ff00] hover:text-[#00ff00] transition-all duration-300">
                View Projects
              </a>
            </motion.div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ff00] to-[#00ff00] rounded-lg blur-xl opacity-50 animate-pulse" />
              <div className="relative neon-border p-1 rounded-lg overflow-hidden">
                <img
                  src={profileImage}
                  alt="Lance Kelly P. Manlangit"
                  className="rounded-lg w-full max-w-md object-cover"
                />
              </div>
              <motion.div
                className="absolute -top-4 -right-4 text-[#00ff00] opacity-50"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <circle cx="40" cy="40" r="30" stroke="currentColor" strokeWidth="2" />
                  <circle cx="40" cy="40" r="20" stroke="currentColor" strokeWidth="1" />
                  <circle cx="40" cy="40" r="10" stroke="currentColor" strokeWidth="1" />
                  <line x1="40" y1="10" x2="40" y2="70" stroke="currentColor" strokeWidth="1" />
                  <line x1="10" y1="40" x2="70" y2="40" stroke="currentColor" strokeWidth="1" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[#00ff00] cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown size={40} />
      </motion.button>
    </section>
  )
}
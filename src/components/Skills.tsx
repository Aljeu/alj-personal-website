"use client"

import { motion, useInView, Variants } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { 
  Smartphone, 
  Cloud, 
  Palette, 
  Server,
  Monitor,
  Cpu
} from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Monitor,
    skills: [
      { name: "JavaScript" },
      { name: "Python" },
      { name: "Java" },
      { name: "C++" },
      { name: "HTML/CSS" },
    ]
  },
  {
    title: "Core Skills",
    icon: Cpu,
    skills: [
      { name: "Problem Solving" },
      { name: "Software Design" },
      { name: "Finance" },
      { name: "Project Management" },
    ]
  },
  {
    title: "Development Tools",
    icon: Cloud,
    skills: [
      { name: "Git & GitHub" },
      { name: "VS Code" },
      { name: "Docker" },
      { name: "Linux" },
    ]
  }
]

export const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-200px" })
  
  const [displayedText, setDisplayedText] = useState("")
  const [showCursor, setShowCursor] = useState(false)
  const headerText = "A comprehensive toolkit of technologies and skills I use to bring ideas to life"

  useEffect(() => {
    if (!isInView) return

    const timer = setTimeout(() => {
      setShowCursor(true)
      let index = 0
      const typeText = setInterval(() => {
        if (index <= headerText.length) {
          setDisplayedText(headerText.slice(0, index))
          index++
        } else {
          clearInterval(typeText)
          setShowCursor(false)
        }
      }, 35)
    }, 800)

    return () => clearTimeout(timer)
  }, [isInView])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-heading">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto min-h-[60px]">
            {displayedText}
            {showCursor && (
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-0.5 h-6 bg-purple-500 ml-1"
              />
            )}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-border transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg mr-4">
                  <category.icon className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3 
                    }}
                    className="group relative px-3 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-lg text-sm font-medium text-foreground hover:scale-110 transition-all duration-300 overflow-hidden cursor-pointer"
                  >
                    {/* Base gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 transition-opacity duration-300" />
                    
                    {/* Animated gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/40 via-pink-500/40 via-cyan-400/40 to-purple-600/40 bg-[length:200%_100%] opacity-0 group-hover:opacity-100 group-hover:animate-[gradient-shift_2s_ease-in-out_infinite] transition-opacity duration-300" />
                    
                    {/* Enhanced border glow on hover */}
                    <div className="absolute inset-0 rounded-lg border border-purple-500/30 group-hover:border-purple-400/60 group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-all duration-300" />
                    
                    {/* Content */}
                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications or additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <motion.div
                className="text-3xl font-bold mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { 
                  opacity: 1, 
                  scale: 1,
                } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                style={{
                  animation: isInView ? 'neon-pulse-purple 2s ease-in-out infinite' : 'none',
                  animationDelay: '1s'
                }}
              >
                2+
              </motion.div>
              <p className="text-muted-foreground">Years Learning</p>
            </div>
            <div className="text-center">
              <motion.div
                className="text-3xl font-bold mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { 
                  opacity: 1, 
                  scale: 1,
                } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                style={{
                  animation: isInView ? 'neon-pulse-cyan 2s ease-in-out infinite' : 'none',
                  animationDelay: '1.5s'
                }}
              >
                15+
              </motion.div>
              <p className="text-muted-foreground">Projects Built</p>
            </div>
            <div className="text-center">
              <motion.div
                className="text-3xl font-bold mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { 
                  opacity: 1, 
                  scale: 1,
                } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                style={{
                  animation: isInView ? 'neon-pulse-blue 2s ease-in-out infinite' : 'none',
                  animationDelay: '2s'
                }}
              >
                8+
              </motion.div>
              <p className="text-muted-foreground">Technologies Used</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

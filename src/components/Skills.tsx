"use client"

import { motion, useInView, Variants } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Cloud, 
  GitBranch, 
  Palette, 
  Zap,
  Server,
  Layers,
  Monitor,
  Cpu
} from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Monitor,
    skills: [
      { name: "JavaScript", level: 85 },
      { name: "Python", level: 80 },
      { name: "Java", level: 75 },
      { name: "C++", level: 70 },
      { name: "HTML/CSS", level: 90 },
    ]
  },
  {
    title: "Frameworks & Libraries",
    icon: Server,
    skills: [
      { name: "React", level: 80 },
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 70 },
      { name: "Django", level: 65 },
      { name: "Bootstrap", level: 80 },
    ]
  },
  {
    title: "Databases",
    icon: Smartphone,
    skills: [
      { name: "MySQL", level: 75 },
      { name: "PostgreSQL", level: 70 },
      { name: "MongoDB", level: 65 },
      { name: "SQLite", level: 80 },
    ]
  },
  {
    title: "Development Tools",
    icon: Cloud,
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Docker", level: 60 },
      { name: "Linux", level: 70 },
    ]
  },
  {
    title: "Core Skills",
    icon: Cpu,
    skills: [
      { name: "Problem Solving", level: 90 },
      { name: "Data Structures", level: 85 },
      { name: "Algorithms", level: 80 },
      { name: "Software Design", level: 75 },
    ]
  },
  {
    title: "Other",
    icon: Palette,
    skills: [
      { name: "API Development", level: 75 },
      { name: "Testing", level: 70 },
      { name: "Agile/Scrum", level: 65 },
      { name: "Documentation", level: 80 },
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
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

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3 
                    }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div
                        className="h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          duration: 1.2, 
                          delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.5,
                          ease: "easeOut"
                        }}
                      />
                    </div>
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
                className="text-3xl font-bold text-purple-500 mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                2+
              </motion.div>
              <p className="text-muted-foreground">Years Learning</p>
            </div>
            <div className="text-center">
              <motion.div
                className="text-3xl font-bold text-cyan-500 mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                15+
              </motion.div>
              <p className="text-muted-foreground">Projects Built</p>
            </div>
            <div className="text-center">
              <motion.div
                className="text-3xl font-bold text-blue-500 mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, delay: 1.0 }}
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

"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

export const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const [displayedText, setDisplayedText] = useState("")
  const [showCursor, setShowCursor] = useState(false)

  const subtitleText = "Passionate about creating digital experiences that blend creativity with functionality"

  useEffect(() => {
    if (!isInView) return

    const timer = setTimeout(() => {
      setShowCursor(true)
      let index = 0
      const typeText = setInterval(() => {
        if (index <= subtitleText.length) {
          setDisplayedText(subtitleText.slice(0, index))
          index++
        } else {
          clearInterval(typeText)
          setShowCursor(false)
        }
      }, 40)
    }, 800)

    return () => clearTimeout(timer)
  }, [isInView])

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
            About Me
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

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Hello! I&apos;m Agnas, a passionate software developer with a strong foundation in 
                computer science and a keen interest in building innovative solutions. I enjoy 
                working with modern technologies and continuously learning new frameworks and tools.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                My journey in software development began with a curiosity about how technology 
                works and how it can solve real-world problems. I focus on writing clean, 
                efficient code and creating user-friendly applications.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                When I&apos;m not coding, you can find me exploring new technologies, contributing 
                to open source projects, or learning about the latest developments in software 
                engineering and computer science.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              {[
                "JavaScript", "Python", "Java", "React", 
                "Node.js", "HTML/CSS", "Git", "SQL"
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="px-4 py-2 bg-accent/50 text-accent-foreground rounded-full text-sm font-medium border border-border/50"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative group"
            >
                <div className="aspect-square relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 p-1">
                  <div className="w-full h-full bg-background rounded-xl flex items-center justify-center">
                    <div className="w-3/4 h-3/4 bg-gradient-to-br from-purple-400 to-cyan-400 rounded-xl flex items-center justify-center text-white text-4xl font-bold">
                      AN
                    </div>
                  </div>
                </div>              {/* Floating elements around the image */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full opacity-60"
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-12 h-12 bg-cyan-500 rounded-full opacity-40"
                animate={{
                  y: [0, 10, 0],
                  scale: [1, 0.9, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
              <motion.div
                className="absolute top-1/2 -left-8 w-6 h-6 bg-blue-500 rounded-full opacity-50"
                animate={{
                  x: [0, -5, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

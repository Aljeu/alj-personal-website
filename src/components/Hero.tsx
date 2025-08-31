"use client"

import { motion, useInView } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect, useRef } from "react"

export const Hero = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-20%" })
  const [displayedText, setDisplayedText] = useState("")
  const fullText = "Motivated learner passionate about AI, machine learning, and finance. With experience in project leadership and auditing, I'm eager to leverage technology for business success and automation in high-stakes fields like Forex and Market Analysis. Always seeking opportunities to expand knowledge and contribute to innovative projects."
  
  useEffect(() => {
    if (!isInView) return

    let currentIndex = 0
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(timer)
      }
    }, 30) // Adjust speed here (lower = faster)

    return () => clearInterval(timer)
  }, [isInView])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section ref={ref} id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 md:pt-20">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-cyan-500/10 animate-gradient-x"></div>
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl"
        animate={isInView ? {
          y: [0, -20, 0],
          x: [0, 10, 0],
        } : { y: 0, x: 0 }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-40 right-32 w-32 h-32 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 blur-xl"
        animate={isInView ? {
          y: [0, 20, 0],
          x: [0, -15, 0],
        } : { y: 0, x: 0 }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-40 left-32 w-24 h-24 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full opacity-20 blur-xl"
        animate={isInView ? {
          y: [0, -15, 0],
          x: [0, 20, 0],
        } : { y: 0, x: 0 }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { 
              opacity: 1, 
              y: 0,
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            } : { opacity: 0, y: 30 }}
            transition={{
              opacity: { duration: 0.8, delay: 0.2 },
              y: { duration: 0.8, delay: 0.2 },
              backgroundPosition: {
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }
            }}
          >
            Hi! I'm{" "}
            <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Alj
            </span>
            . Ready to{" "}
            <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              start building
            </span>
            ?
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8 font-light flex flex-wrap justify-center gap-2 md:gap-4"
        >
          <motion.span
            whileHover={{ 
              scale: 1.1,
              transition: { duration: 0.3 }
            }}
            className="cursor-pointer select-none px-3 py-1 rounded-lg
                       hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 
                       hover:bg-clip-text hover:text-transparent hover:shadow-lg
                       transition-all duration-300 ease-out relative group
                       hover:bg-purple-500/10"
          >
            AI & Finance Enthusiast
          </motion.span>
          
          <span className="text-muted-foreground/50">|</span>
          
          <motion.span
            whileHover={{ 
              scale: 1.1,
              transition: { duration: 0.3 }
            }}
            className="cursor-pointer select-none px-3 py-1 rounded-lg
                       hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 
                       hover:bg-clip-text hover:text-transparent hover:shadow-lg
                       transition-all duration-300 ease-out relative group
                       hover:bg-blue-500/10"
          >
            Project Leader
          </motion.span>
          
          <span className="text-muted-foreground/50">|</span>
          
          <motion.span
            whileHover={{ 
              scale: 1.1,
              transition: { duration: 0.3 }
            }}
            className="cursor-pointer select-none px-3 py-1 rounded-lg
                       hover:bg-gradient-to-r hover:from-cyan-500 hover:to-teal-500 
                       hover:bg-clip-text hover:text-transparent hover:shadow-lg
                       transition-all duration-300 ease-out relative group
                       hover:bg-cyan-500/10"
          >
            Automation Advocate
          </motion.span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-muted-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed min-h-[120px]"
        >
          <span className="inline-block">
            {displayedText}
            <motion.span
              animate={isInView ? { opacity: [1, 0, 1] } : { opacity: 0 }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-0.5 h-6 bg-purple-500 ml-1"
            />
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Button
            variant="gradient"
            size="lg"
            onClick={() => scrollToSection("projects")}
            className="text-lg px-8 py-6 h-auto"
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="text-lg px-8 py-6 h-auto border-2 hover:bg-accent"
          >
            Get In Touch
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex justify-center space-x-6 mb-16"
        >
          <motion.a
            href="https://github.com/Aljeu"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={isInView ? { scale: 1.1, y: -2 } : {}}
            whileTap={isInView ? { scale: 0.95 } : {}}
            className="p-3 rounded-full bg-background/10 backdrop-blur-sm border border-border/20 hover:border-border/40 transition-all"
          >
            <Github className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/aljhoneagnas/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={isInView ? { scale: 1.1, y: -2 } : {}}
            whileTap={isInView ? { scale: 0.95 } : {}}
            className="p-3 rounded-full bg-background/10 backdrop-blur-sm border border-border/20 hover:border-border/40 transition-all"
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="mailto:agnasaljhone@gmail.com"
            whileHover={isInView ? { scale: 1.1, y: -2 } : {}}
            whileTap={isInView ? { scale: 0.95 } : {}}
            className="p-3 rounded-full bg-background/10 backdrop-blur-sm border border-border/20 hover:border-border/40 transition-all"
          >
            <Mail className="w-6 h-6" />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex justify-center"
        >
          <motion.button
            onClick={() => scrollToSection("about")}
            className="text-muted-foreground hover:text-foreground transition-colors"
            animate={isInView ? { y: [0, 10, 0] } : { y: 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

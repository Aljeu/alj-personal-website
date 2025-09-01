"use client"

import { motion, useInView } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRef } from "react"
import { SectionLayout } from "@/components/layout/SectionLayout"

export const Hero = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-20%" })
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <SectionLayout id="home" fullHeight={true} background="gradient">
      <div ref={ref} className="text-center py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { 
              opacity: 1, 
              y: 0
            } : { opacity: 0, y: 30 }}
            transition={{
              opacity: { duration: 0.8, delay: 0.2 },
              y: { duration: 0.8, delay: 0.2 }
            }}
          >
            Hi! I&apos;m{" "}
            <span className="gradient-text-primary">
              Alj
            </span>
            . Ready to{" "}
            <span className="gradient-text-primary">
              start building
            </span>
            ?
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 font-light flex flex-wrap justify-center gap-1 sm:gap-2 md:gap-4"
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
            AI Engineer
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
            Operations Manager
          </motion.span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-16"
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            whileTap={{ scale: 0.98 }}
            className="relative group"
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 h-auto w-full sm:w-auto 
                         relative overflow-hidden rounded-lg font-semibold text-white
                         living-gradient transform hover:scale-105 shadow-lg hover:shadow-xl
                         transition-all duration-300 ease-out
                         hover:shadow-2xl hover:shadow-purple-500/30"
            >
              <span className="relative z-10">View My Work</span>
            </button>
          </motion.div>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 h-auto border-2 hover:bg-accent w-full sm:w-auto"
          >
            Get In Touch
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex justify-center space-x-4 sm:space-x-6 mb-8 sm:mb-16"
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
    </SectionLayout>
  )
}

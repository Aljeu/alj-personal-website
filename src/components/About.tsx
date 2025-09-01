"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { SectionLayout } from "@/components/layout/SectionLayout"

export const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const subtitleText = "I'm a motivated learner with a growing interest in AI, machine learning, and finance. With experience in project leadership and auditing, I'm eager to develop my skills further and apply them to real-world challenges. I'm passionate about learning how technology can drive business success and streamline processes, as well as leveraging automation in high-stakes fields such as Forex and Market Analysis. Always looking for opportunities to expand my knowledge, I'm excited to grow in these fields and contribute to innovative projects while collaborating with others to achieve impactful results."

  return (
    <SectionLayout id="about" fullHeight={true} background="gradient" className="relative">
      <div ref={ref} className="w-full relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 gradient-text-heading relative z-30">
            About Me
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto min-h-[60px] relative z-30">
            {subtitleText}
          </p>
        </motion.div>
      </div>
    </SectionLayout>
  )
}

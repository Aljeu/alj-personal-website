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
      {/* Decorative Background Spheres - extending beyond section boundaries */}
      <div className="absolute inset-0 pointer-events-none" style={{ overflow: 'visible' }}>
        {/* Large sphere - top left, extending beyond boundaries */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 0.8, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="absolute w-96 h-96 rounded-full blur-xl animate-[gradient-flow_6s_ease-in-out_infinite,pulse-scale_8s_ease-in-out_infinite]"
          style={{ 
            top: '-200px', 
            left: '-200px',
            zIndex: 1,
            background: 'linear-gradient(45deg, rgba(168, 85, 247, 0.4), rgba(236, 72, 153, 0.3), rgba(6, 182, 212, 0.4), rgba(168, 85, 247, 0.4))',
            backgroundSize: '300% 300%'
          }}
        />
        
        {/* Medium sphere - center right, extending beyond boundaries */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 0.7, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ duration: 1.0, delay: 0.6 }}
          className="absolute w-64 h-64 rounded-full blur-lg animate-[gradient-wave_8s_ease-in-out_infinite,pulse-scale_8s_ease-in-out_infinite]"
          style={{ 
            top: '30%', 
            right: '-130px',
            zIndex: 1,
            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.5), rgba(59, 130, 246, 0.3), rgba(168, 85, 247, 0.4), rgba(6, 182, 212, 0.5))',
            backgroundSize: '300% 300%'
          }}
        />
        
        {/* Small sphere - bottom center, extending beyond boundaries */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 0.75, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="absolute w-48 h-48 rounded-full blur-lg animate-[gradient-shift_4s_ease-in-out_infinite,pulse-scale_8s_ease-in-out_infinite]"
          style={{ 
            bottom: '-100px', 
            left: '25%',
            zIndex: 1,
            background: 'linear-gradient(225deg, rgba(236, 72, 153, 0.4), rgba(168, 85, 247, 0.3), rgba(6, 182, 212, 0.5), rgba(236, 72, 153, 0.4))',
            backgroundSize: '300% 300%'
          }}
        />
      </div>

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

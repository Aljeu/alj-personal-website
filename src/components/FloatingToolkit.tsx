"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { 
  Settings, 
  ArrowRight, 
  Headphones, 
  MessageCircle,
  X
} from "lucide-react"

export const FloatingToolkit = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const toolkitRef = useRef<HTMLDivElement>(null)

  // Track window size for dynamic tooltip positioning
  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    updateWindowSize()
    window.addEventListener('resize', updateWindowSize)
    return () => window.removeEventListener('resize', updateWindowSize)
  }, [])

  // Get dynamic tooltip position based on toolkit position
  const getTooltipPosition = () => {
    if (!toolkitRef.current || windowSize.width === 0) return 'right'
    
    const rect = toolkitRef.current.getBoundingClientRect()
    const toolkitCenterX = rect.left + rect.width / 2
    const screenWidth = windowSize.width
    
    // If toolkit is in the right half of the screen, show tooltip on the left
    if (toolkitCenterX > screenWidth / 2) {
      return 'left'
    }
    
    return 'right'
  }

  // Define the section order for navigation
  const sections = ["home", "about", "experience", "projects", "skills", "contact"]

  // Track active section using intersection observer
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -80% 0px",
      threshold: 0
    }

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId)
      if (element) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(sectionId)
            }
          })
        }, observerOptions)

        observer.observe(element)
        observers.push(observer)
      }
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  const scrollToNextSection = () => {
    const currentIndex = sections.indexOf(activeSection)
    const nextIndex = (currentIndex + 1) % sections.length // Loop back to home after contact
    const nextSection = sections[nextIndex]
    
    const element = document.getElementById(nextSection)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const toggleToolkit = () => {
    setIsOpen(!isOpen)
  }

  const toolkitButtons = [
    {
      icon: ArrowRight,
      label: "Next Section",
      color: "from-blue-500 to-cyan-500",
      onClick: () => {
        scrollToNextSection()
        console.log(`Navigating from ${activeSection} to next section`)
      }
    },
    {
      icon: MessageCircle,
      label: "Support",
      color: "from-green-500 to-emerald-500",
      onClick: () => {
        // Add customer service functionality here
        console.log("Customer service clicked")
      }
    },
    {
      icon: Headphones,
      label: "Audio",
      color: "from-purple-500 to-pink-500",
      onClick: () => {
        // Add headphones/audio functionality here
        console.log("Headphones clicked")
      }
    }
  ]

  return (
    <motion.div
      ref={toolkitRef}
      drag
      dragMomentum={false}
      dragElastic={0.1}
      className="fixed bottom-6 right-6 z-50 cursor-grab active:cursor-grabbing"
      whileDrag={{ scale: 1.05 }}
    >
      {/* Floating Action Buttons */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col space-y-3 mb-3"
          >
            {toolkitButtons.map((button, index) => {
              const tooltipPosition = getTooltipPosition()
              
              return (
                <motion.button
                  key={button.label}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                  onClick={button.onClick}
                  className={`group relative w-12 h-12 bg-gradient-to-r ${button.color} rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center`}
                >
                  <button.icon className="w-5 h-5 text-white" />
                  
                  {/* Dynamic Tooltip */}
                  <div className={`absolute px-2 py-1 bg-card border border-border rounded-md text-xs font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-10 ${
                    tooltipPosition === 'left'
                      ? 'right-full mr-3'
                      : 'left-full ml-3'
                  }`}>
                    {button.label}
                  </div>
                </motion.button>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={toggleToolkit}
        className="w-14 h-14 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group relative overflow-hidden"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Animated background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-600 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Icon with rotation animation */}
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="relative z-10"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Settings className="w-6 h-6 text-white" />
          )}
        </motion.div>

        {/* Ripple effect on click */}
        <motion.div
          className="absolute inset-0 rounded-full bg-white/20"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: isOpen ? 1.5 : 0, opacity: isOpen ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>
    </motion.div>
  )
}

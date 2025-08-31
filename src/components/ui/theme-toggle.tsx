"use client"

import { motion } from "framer-motion"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem("theme")
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    
    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    } else {
      setIsDark(false)
      document.documentElement.classList.remove("dark")
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      if (isDark) {
        document.documentElement.classList.add("dark")
        localStorage.setItem("theme", "dark")
      } else {
        document.documentElement.classList.remove("dark")
        localStorage.setItem("theme", "light")
      }
    }
  }, [isDark, mounted])

  if (!mounted) {
    return (
      <div className="w-16 h-8 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
    )
  }

  return (
    <motion.button
      onClick={() => setIsDark(!isDark)}
      className={`relative flex items-center w-16 h-8 rounded-full p-1 transition-all duration-300 ${
        isDark 
          ? "bg-gray-800 shadow-inner" 
          : "bg-gray-200 shadow-sm"
      } hover:shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {/* Background gradient overlay */}
      <motion.div
        className={`absolute inset-0.5 rounded-full transition-opacity duration-300 ${
          isDark 
            ? "bg-gradient-to-r from-blue-600 to-indigo-700" 
            : "bg-gradient-to-r from-amber-400 to-orange-500"
        }`}
        animate={{ opacity: 0.8 }}
      />
      
      {/* Toggle circle */}
      <motion.div
        className="relative z-10 w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center"
        animate={{
          x: isDark ? 32 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30,
        }}
      >
        <motion.div
          initial={false}
          animate={{ 
            rotate: isDark ? 360 : 0,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 0.5 },
            scale: { duration: 0.2 }
          }}
        >
          {isDark ? (
            <Moon className="h-3.5 w-3.5 text-indigo-600" fill="currentColor" />
          ) : (
            <Sun className="h-3.5 w-3.5 text-amber-600" />
          )}
        </motion.div>
      </motion.div>
      
      {/* Background icons */}
      <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
        <motion.div
          animate={{ 
            opacity: isDark ? 0.3 : 0.7,
            scale: isDark ? 0.8 : 1
          }}
          transition={{ duration: 0.3 }}
        >
          <Sun className="h-3 w-3 text-amber-300" />
        </motion.div>
        <motion.div
          animate={{ 
            opacity: isDark ? 0.7 : 0.3,
            scale: isDark ? 1 : 0.8
          }}
          transition={{ duration: 0.3 }}
        >
          <Moon className="h-3 w-3 text-blue-300" fill="currentColor" />
        </motion.div>
      </div>
      
      {/* Light mode label */}
      <motion.span
        className="absolute -bottom-6 left-0 text-xs font-medium text-gray-500 dark:text-gray-400"
        animate={{ 
          opacity: isDark ? 0 : 1,
          y: isDark ? 5 : 0
        }}
        transition={{ duration: 0.2 }}
      >
        LIGHT
      </motion.span>
      
      {/* Dark mode label */}
      <motion.span
        className="absolute -bottom-6 right-0 text-xs font-medium text-gray-500 dark:text-gray-400"
        animate={{ 
          opacity: isDark ? 1 : 0,
          y: isDark ? 0 : 5
        }}
        transition={{ duration: 0.2 }}
      >
        DARK
      </motion.span>
    </motion.button>
  )
}

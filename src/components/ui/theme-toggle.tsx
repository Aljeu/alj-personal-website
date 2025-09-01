"use client"

import { motion } from "framer-motion"
import { Monitor, Moon, Sun } from "lucide-react"
import { useTheme } from "@/hooks/use-theme"

export const ThemeToggle = () => {
  const { theme, resolvedTheme, cycleTheme, mounted } = useTheme()

  if (!mounted) {
    return (
      <div className="w-20 h-10 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
    )
  }

  const getThemeIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="h-4 w-4 text-amber-600" />
      case "dark":
        return <Moon className="h-4 w-4 text-indigo-600" fill="currentColor" />
      case "system":
        return <Monitor className="h-4 w-4 text-blue-600" />
      default:
        return <Monitor className="h-4 w-4 text-blue-600" />
    }
  }

  const getThemeLabel = () => {
    switch (theme) {
      case "light":
        return "LIGHT"
      case "dark":
        return "DARK"
      case "system":
        return `SYSTEM (${resolvedTheme.toUpperCase()})`
      default:
        return "SYSTEM"
    }
  }

  const getThemeColors = () => {
    switch (theme) {
      case "light":
        return {
          bg: "bg-gradient-to-r from-amber-100 to-orange-100",
          border: "border-amber-200",
          buttonBg: "bg-white",
          text: "text-amber-700"
        }
      case "dark":
        return {
          bg: "bg-gradient-to-r from-indigo-900 to-purple-900",
          border: "border-indigo-700",
          buttonBg: "bg-gray-800",
          text: "text-indigo-300"
        }
      case "system":
        return {
          bg: "bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900",
          border: "border-blue-200 dark:border-blue-700",
          buttonBg: "bg-white dark:bg-gray-800",
          text: "text-blue-700 dark:text-blue-300"
        }
      default:
        return {
          bg: "bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900",
          border: "border-blue-200 dark:border-blue-700",
          buttonBg: "bg-white dark:bg-gray-800",
          text: "text-blue-700 dark:text-blue-300"
        }
    }
  }

  const colors = getThemeColors()

  return (
    <div className="flex flex-col items-center space-y-2">
      <motion.button
        onClick={cycleTheme}
        className={`relative flex items-center justify-center w-20 h-10 rounded-full p-1 border transition-all duration-300 ${colors.bg} ${colors.border} hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={`Current theme: ${theme}. Click to cycle through themes`}
      >
        {/* Theme indicator circle */}
        <motion.div
          className={`w-8 h-8 rounded-full shadow-lg flex items-center justify-center ${colors.buttonBg}`}
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 0.5 },
            scale: { duration: 0.3 }
          }}
          key={theme} // This will trigger the animation when theme changes
        >
          {getThemeIcon()}
        </motion.div>
        
        {/* Background pattern for system theme */}
        {theme === "system" && (
          <motion.div
            className="absolute inset-1 rounded-full opacity-20"
            style={{
              background: "repeating-conic-gradient(from 0deg, transparent 0deg, currentColor 2deg, transparent 4deg)"
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        )}
        
        {/* Visual indicator for resolved theme in system mode */}
        {theme === "system" && (
          <motion.div
            className={`absolute top-0.5 right-0.5 w-2 h-2 rounded-full ${
              resolvedTheme === "dark" ? "bg-indigo-400" : "bg-amber-400"
            }`}
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}
      </motion.button>
      
      {/* Theme label */}
      <motion.span
        className={`text-xs font-semibold tracking-wider text-center ${colors.text}`}
        animate={{ 
          opacity: [0.7, 1, 0.7],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {getThemeLabel()}
      </motion.span>
    </div>
  )
}

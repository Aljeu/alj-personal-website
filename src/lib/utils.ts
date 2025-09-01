import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Theme-aware utilities
export const getSystemTheme = (): "light" | "dark" => {
  if (typeof window === "undefined") return "light"
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

export const watchSystemTheme = (callback: (theme: "light" | "dark") => void) => {
  if (typeof window === "undefined") return () => {}
  
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
  const handler = (e: MediaQueryListEvent) => {
    callback(e.matches ? "dark" : "light")
  }
  
  mediaQuery.addEventListener("change", handler)
  return () => mediaQuery.removeEventListener("change", handler)
}

// Enhanced theme-aware classes
export const themeClasses = {
  // Backgrounds
  bg: {
    primary: "bg-white dark:bg-gray-900",
    secondary: "bg-gray-50 dark:bg-gray-800",
    accent: "bg-gray-100 dark:bg-gray-700",
    card: "bg-white dark:bg-gray-800/50 backdrop-blur-sm",
    glass: "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"
  },
  
  // Text colors
  text: {
    primary: "text-gray-900 dark:text-gray-100",
    secondary: "text-gray-600 dark:text-gray-400",
    muted: "text-gray-500 dark:text-gray-500",
    accent: "text-blue-600 dark:text-blue-400"
  },
  
  // Borders
  border: {
    default: "border-gray-200 dark:border-gray-700",
    accent: "border-gray-300 dark:border-gray-600",
    focus: "border-blue-500 dark:border-blue-400"
  },
  
  // Shadows
  shadow: {
    sm: "shadow-sm dark:shadow-gray-900/20",
    md: "shadow-md dark:shadow-gray-900/30",
    lg: "shadow-lg dark:shadow-gray-900/40",
    xl: "shadow-xl dark:shadow-gray-900/50"
  }
}

// Theme-aware animation variants
export const themeAwareVariants = {
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" }
  },
  
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.3, ease: "easeOut" }
  },
  
  slideInFromLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

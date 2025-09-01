"use client"

import { useEffect, useState, useCallback } from "react"

export type Theme = "light" | "dark" | "system"

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>("system")
  const [mounted, setMounted] = useState(false)
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light")

  // Function to get the resolved theme (actual light/dark based on system preference)
  const getResolvedTheme = (currentTheme: Theme): "light" | "dark" => {
    if (currentTheme === "system") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    }
    return currentTheme
  }

  // Function to apply theme
  const applyTheme = useCallback((newTheme: Theme) => {
    const resolved = getResolvedTheme(newTheme)
    setResolvedTheme(resolved)
    
    if (resolved === "dark") {
      document.documentElement.classList.add("dark")
      document.documentElement.style.colorScheme = "dark"
    } else {
      document.documentElement.classList.remove("dark")
      document.documentElement.style.colorScheme = "light"
    }
  }, [])

  // Function to cycle through themes
  const cycleTheme = () => {
    const themes: Theme[] = ["light", "dark", "system"]
    const currentIndex = themes.indexOf(theme)
    const nextIndex = (currentIndex + 1) % themes.length
    const newTheme = themes[nextIndex]
    setTheme(newTheme)
    return newTheme
  }

  // Initialize theme on mount
  useEffect(() => {
    setMounted(true)
    
    // Get saved theme or default to system
    const savedTheme = (localStorage.getItem("theme") as Theme) || "system"
    setTheme(savedTheme)
    applyTheme(savedTheme)

    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleSystemThemeChange = () => {
      const currentTheme = (localStorage.getItem("theme") as Theme) || "system"
      if (currentTheme === "system") {
        applyTheme(currentTheme)
      }
    }

    mediaQuery.addEventListener("change", handleSystemThemeChange)
    return () => mediaQuery.removeEventListener("change", handleSystemThemeChange)
  }, [applyTheme])

  // Apply theme when it changes
  useEffect(() => {
    if (mounted) {
      applyTheme(theme)
      localStorage.setItem("theme", theme)
    }
  }, [theme, mounted, applyTheme])

  return {
    theme,
    resolvedTheme,
    setTheme,
    cycleTheme,
    mounted
  }
}

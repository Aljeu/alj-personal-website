"use client"

import { useState, useEffect } from 'react'

export const useViewportSection = () => {
  const [dimensions, setDimensions] = useState({
    height: 0,
    width: 0,
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isLarge: false
  })

  useEffect(() => {
    const updateDimensions = () => {
      const height = window.innerHeight
      const width = window.innerWidth
      
      setDimensions({
        height,
        width,
        isMobile: width < 640,
        isTablet: width >= 640 && width < 1024,
        isDesktop: width >= 1024 && width < 1280,
        isLarge: width >= 1280
      })
    }

    // Set initial dimensions
    updateDimensions()

    // Listen for resize events
    window.addEventListener('resize', updateDimensions)
    
    // Listen for orientation changes on mobile
    window.addEventListener('orientationchange', () => {
      setTimeout(updateDimensions, 100) // Small delay for orientation change
    })

    return () => {
      window.removeEventListener('resize', updateDimensions)
      window.removeEventListener('orientationchange', updateDimensions)
    }
  }, [])

  // Calculate dynamic spacing based on viewport
  const getVerticalSpacing = () => {
    if (dimensions.isMobile) return 'py-8 sm:py-12'
    if (dimensions.isTablet) return 'py-12 md:py-16'
    if (dimensions.isDesktop) return 'py-16 lg:py-20'
    return 'py-20 xl:py-24'
  }

  const getHorizontalSpacing = () => {
    if (dimensions.isMobile) return 'px-4'
    if (dimensions.isTablet) return 'px-6 md:px-8'
    if (dimensions.isDesktop) return 'px-8 lg:px-12'
    return 'px-12 xl:px-16'
  }

  const getSectionHeight = (fullHeight: boolean = false) => {
    if (fullHeight) return 'min-h-screen'
    if (dimensions.isMobile) return 'min-h-[80vh]'
    if (dimensions.isTablet) return 'min-h-[85vh]'
    return 'min-h-[90vh]'
  }

  const getContainerMaxWidth = () => {
    if (dimensions.isMobile) return 'max-w-full'
    if (dimensions.isTablet) return 'max-w-4xl'
    if (dimensions.isDesktop) return 'max-w-5xl'
    return 'max-w-6xl'
  }

  return {
    dimensions,
    getVerticalSpacing,
    getHorizontalSpacing,
    getSectionHeight,
    getContainerMaxWidth
  }
}

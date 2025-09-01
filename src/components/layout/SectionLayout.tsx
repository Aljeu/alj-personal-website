"use client"

import { ReactNode } from 'react'
import { useViewportSection } from '@/hooks/useViewportSection'

interface SectionLayoutProps {
  id: string
  children: ReactNode
  fullHeight?: boolean
  className?: string
  background?: 'default' | 'gradient' | 'muted' | 'none'
}

export const SectionLayout = ({ 
  id, 
  children, 
  fullHeight = false, 
  className = '',
  background = 'default'
}: SectionLayoutProps) => {
  const { getSectionHeight, getVerticalSpacing, getHorizontalSpacing, getContainerMaxWidth } = useViewportSection()

  const getBackgroundStyles = () => {
    switch (background) {
      case 'gradient':
        return 'bg-gradient-to-b from-background via-accent/5 to-background'
      case 'muted':
        return 'bg-gradient-to-b from-background via-muted/20 to-background'
      case 'none':
        return ''
      default:
        return 'bg-background'
    }
  }

  return (
    <section 
      id={id}
      className={`
        ${getSectionHeight(fullHeight)} 
        ${getVerticalSpacing()} 
        ${getHorizontalSpacing()} 
        relative overflow-hidden
        ${fullHeight ? 'flex items-center' : 'flex flex-col justify-center'}
        ${className}
      `}
    >
      {background !== 'none' && (
        <div className={`absolute inset-0 ${getBackgroundStyles()}`}></div>
      )}
      
      <div className={`${getContainerMaxWidth()} mx-auto w-full relative z-10 ${fullHeight ? '' : 'py-8'}`}>
        {children}
      </div>
    </section>
  )
}

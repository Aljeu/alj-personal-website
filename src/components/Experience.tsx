"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { 
  Calendar,
  MapPin,
  Building,
  ChevronRight,
  Briefcase,
  Crown,
  Computer
} from "lucide-react"

const experiences = [
  {
    id: 1,
    title: "Intern",
    company: "DOST-ITDI, Materials Science Division",
    location: "Philippines",
    duration: "2025",
    type: "Internship",
    category: "Engineering" as const,
    description: "Gained hands-on experience in advanced materials research and 3D printing technologies for industrial applications.",
    achievements: [
      "Trained in 3D printing workflows and research for industrial applications",
      "Applied materials knowledge to improve properties and optimize processes",
      "Assisted in MAST3R projects, gaining insights into materials science and engineering"
    ],
    technologies: ["3D Printing", "Materials Science", "Research", "Process Optimization"],
    featured: true
  },
  {
    id: 2,
    title: "Director",
    company: "UP Fair Kalye Tunes 2025",
    location: "University of the Philippines",
    duration: "2025",
    type: "Leadership",
    category: "Leadership" as const,
    description: "Co-led flagship event highlighting hip-hop artistry and advocacy for urban poor communities with exceptional business results.",
    achievements: [
      "Co-led flagship event highlighting hip-hop artistry and advocacy for urban poor communities",
      "Generated seven figures in revenue while minimizing costs",
      "Oversaw full project management and led cross-functional committees"
    ],
    technologies: ["Project Management", "Leadership", "Event Planning", "Revenue Generation"],
    featured: true
  },
  {
    id: 3,
    title: "Head of Marketing & Finance",
    company: "National MMME Summit 2025",
    location: "Philippines",
    duration: "2025",
    type: "Leadership",
    category: "Leadership" as const,
    description: "Managed comprehensive marketing and finance operations for a national summit connecting students with industry companies.",
    achievements: [
      "Managed marketing and finance for a national summit connecting students and companies",
      "Secured seven company partnerships and six-figure sponsorships",
      "Negotiated contracts and led full financial oversight"
    ],
    technologies: ["Marketing", "Finance", "Partnership Development", "Contract Negotiation"],
    featured: true
  },
  {
    id: 4,
    title: "Head of Finance",
    company: "UP Fair Kalye Tunes 2023",
    location: "University of the Philippines",
    duration: "2023",
    type: "Leadership",
    category: "Leadership" as const,
    description: "Led comprehensive financial management for a major university fair event with significant revenue generation.",
    achievements: [
      "Led financial management for a major university fair event",
      "Generated seven figures in sales with profit-driven strategies",
      "Assessed financial risks to ensure success"
    ],
    technologies: ["Financial Management", "Risk Assessment", "Sales Strategy", "Profit Optimization"],
    featured: false
  },
  // Tech category experiences (placeholder for future additions)
  {
    id: 5,
    title: "AI Research Assistant",
    company: "Personal Projects",
    location: "Remote",
    duration: "2024-2025",
    type: "Tech",
    category: "Tech" as const,
    description: "Developed machine learning models and automation tools for various applications.",
    achievements: [
      "Built predictive models for financial analysis",
      "Implemented automation workflows for data processing",
      "Explored AI applications in market analysis"
    ],
    technologies: ["Python", "Machine Learning", "Data Analysis", "Automation"],
    featured: true
  }
]

// Experience Card Component
interface ExperienceCardProps {
  experience: typeof experiences[0]
  isSelected: boolean
  isBackground?: boolean
}

const ExperienceCard = ({ experience, isSelected, isBackground = false }: ExperienceCardProps) => {
  return (
    <motion.div
      className={`relative bg-card border border-border/50 rounded-3xl shadow-lg backdrop-blur-sm transition-all duration-700 ease-out cursor-pointer overflow-hidden h-[420px] ${
        isSelected 
          ? 'bg-gradient-to-br from-card/95 to-card/90 shadow-2xl shadow-purple-500/20 border border-purple-500/30' 
          : isBackground 
            ? 'bg-gradient-to-br from-card/70 to-card/60 border border-border/30'
            : 'bg-gradient-to-br from-card/95 to-card/90 shadow-xl border border-border'
      }`}
      whileHover={isSelected ? { 
        scale: 1.02,
        boxShadow: '0 25px 50px -12px rgba(147, 51, 234, 0.3)'
      } : {}}
      transition={{ duration: 0.3 }}
    >
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-700 ${
        isSelected 
          ? 'from-purple-500/10 via-transparent to-pink-500/10 opacity-100'
          : 'from-purple-500/5 via-transparent to-pink-500/5 opacity-50'
      }`} />
      
      <div className="relative p-6 h-full flex flex-col overflow-hidden">
        {/* Header with icon and type badge */}
        <div className="flex items-start justify-between mb-6 flex-shrink-0">
          <div className="flex items-center space-x-4">
            <motion.div
              className={`w-14 h-14 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                isSelected ? 'scale-110 shadow-lg shadow-purple-500/30' : 'scale-100'
              }`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              {experience.category === "Tech" && <Computer className="w-7 h-7 text-white" />}
              {experience.category === "Engineering" && <Briefcase className="w-7 h-7 text-white" />}
              {experience.category === "Leadership" && <Crown className="w-7 h-7 text-white" />}
            </motion.div>
            <div className="min-w-0 flex-1">
              <motion.h3 
                className={`font-bold transition-all duration-300 leading-tight ${
                  isSelected ? 'text-2xl text-foreground mb-2' : 'text-xl text-foreground/80 mb-1'
                }`}
                animate={isSelected ? { scale: 1 } : { scale: 0.95 }}
              >
                {experience.title}
              </motion.h3>
              <div className="flex items-start space-x-2 text-muted-foreground">
                <Building className={`flex-shrink-0 mt-0.5 ${isSelected ? 'w-5 h-5' : 'w-4 h-4'}`} />
                <span className={`font-medium transition-all duration-300 leading-relaxed ${
                  isSelected ? 'text-purple-400 text-base' : 'text-muted-foreground text-sm'
                }`}>
                  {experience.company}
                </span>
              </div>
            </div>
          </div>
          
          <span className={`px-4 py-2 rounded-full font-medium transition-all duration-300 flex-shrink-0 ${
            isSelected ? 'text-sm' : 'text-xs'
          } ${
            experience.category === "Tech" ? "bg-green-500/20 text-green-400 border border-green-500/30" :
            experience.category === "Engineering" ? "bg-blue-500/20 text-blue-400 border border-blue-500/30" :
            experience.category === "Leadership" ? "bg-purple-500/20 text-purple-400 border border-purple-500/30" :
            "bg-orange-500/20 text-orange-400 border border-orange-500/30"
          } ${isSelected ? 'scale-105' : 'scale-100'}`}>
            {experience.type}
          </span>
        </div>

        {/* Location and Duration */}
        <div className="flex items-center justify-between mb-6 flex-shrink-0">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <MapPin className={`flex-shrink-0 ${isSelected ? 'w-5 h-5' : 'w-4 h-4'}`} />
            <span className={`transition-all duration-300 ${
              isSelected ? 'text-base font-medium' : 'text-sm'
            }`}>{experience.location}</span>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Calendar className={`flex-shrink-0 ${isSelected ? 'w-5 h-5' : 'w-4 h-4'}`} />
            <span className={`font-medium transition-colors duration-300 ${
              isSelected ? 'text-purple-300 text-base' : 'text-muted-foreground text-sm'
            }`}>
              {experience.duration}
            </span>
          </div>
        </div>

        {/* Description - expanded with better spacing */}
        <motion.div 
          className={`leading-relaxed mb-4 transition-all duration-300 flex-1 ${
            isSelected ? 'text-foreground/90' : 'text-muted-foreground'
          }`}
          animate={isSelected ? { opacity: 1, y: 0 } : { opacity: 0.7, y: 5 }}
        >
          <p className={`transition-all duration-300 ${
            isSelected ? 'text-lg leading-relaxed' : 'text-base leading-normal'
          }`}>
            {experience.description}
          </p>
        </motion.div>

        {/* Technologies/Skills - moved up with reduced spacing */}
        <motion.div 
          className="flex flex-wrap gap-3 flex-shrink-0"
          animate={isSelected ? { opacity: 1, y: 0 } : { opacity: 0.6, y: 10 }}
        >
          {experience.technologies.slice(0, isSelected ? experience.technologies.length : 8).map((tech, techIndex) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: techIndex * 0.05 }}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isSelected ? 'text-sm' : 'text-xs'
              } ${
                isSelected 
                  ? 'bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-foreground border border-purple-500/40 hover:scale-105 shadow-sm' 
                  : 'bg-muted/50 text-foreground border border-muted/30'
              }`}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* Decorative elements */}
        <div className={`absolute top-4 right-4 w-16 h-16 rounded-full transition-all duration-700 ${
          isSelected 
            ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-60' 
            : 'bg-gradient-to-br from-muted/20 to-muted/10 opacity-30'
        }`} />
        <div className={`absolute top-6 right-6 w-10 h-10 rounded-full transition-all duration-700 ${
          isSelected 
            ? 'bg-gradient-to-br from-purple-500/30 to-pink-500/30 opacity-40' 
            : 'bg-gradient-to-br from-muted/30 to-muted/20 opacity-20'
        }`} />
      </div>
    </motion.div>
  )
}

export const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-200px" })
  
  const [displayedText, setDisplayedText] = useState("")
  const [showCursor, setShowCursor] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<"Tech" | "Engineering" | "Leadership">("Leadership")
  const [selectedCardIndex, setSelectedCardIndex] = useState(0)
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)
  
  const headerText = "Leadership experience in project management, finance, and materials science research"

  useEffect(() => {
    if (!isInView) return

    const timer = setTimeout(() => {
      setShowCursor(true)
      let index = 0
      const typeText = setInterval(() => {
        if (index <= headerText.length) {
          setDisplayedText(headerText.slice(0, index))
          index++
        } else {
          clearInterval(typeText)
          setShowCursor(false)
        }
      }, 40)
    }, 800)

    return () => clearTimeout(timer)
  }, [isInView])

  // Reset selected card index when category changes
  useEffect(() => {
    setSelectedCardIndex(0)
    setIsAutoScrolling(selectedCategory === "Leadership")
  }, [selectedCategory])

  // Infinite scrolling for Leadership tab
  useEffect(() => {
    if (selectedCategory !== "Leadership" || !isAutoScrolling) return

    const filteredExperiences = experiences.filter(exp => exp.category === selectedCategory)
    if (filteredExperiences.length <= 1) return

    const interval = setInterval(() => {
      setSelectedCardIndex(prevIndex => {
        const nextIndex = (prevIndex + 1) % filteredExperiences.length
        return nextIndex
      })
    }, 3000) // Change card every 3 seconds

    return () => clearInterval(interval)
  }, [selectedCategory, isAutoScrolling])

  // Pause auto-scrolling on manual interaction
  const handleManualCardChange = (newIndex: number) => {
    setSelectedCardIndex(newIndex)
    setIsAutoScrolling(false)
    
    // Resume auto-scrolling after 5 seconds of inactivity
    setTimeout(() => {
      if (selectedCategory === "Leadership") {
        setIsAutoScrolling(true)
      }
    }, 5000)
  }

  // Filter experiences based on selected category
  const filteredExperiences = experiences.filter(exp => exp.category === selectedCategory)

  return (
    <section id="experience" className="py-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-3"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2 gradient-text-heading">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto min-h-[60px]">
            {displayedText}
            {showCursor && (
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-0.5 h-6 bg-purple-500 ml-1"
              />
            )}
          </p>
        </motion.div>

        {/* Category Selection Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-4 mb-16"
        >
          {(["Tech", "Engineering", "Leadership"] as const).map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
              className={`relative overflow-hidden px-6 py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 group ${
                selectedCategory === category
                  ? 'text-white living-gradient shadow-lg'
                  : 'text-muted-foreground bg-card/50 border border-border/50 hover:border-border hover:bg-card/70'
              }`}
            >
              {/* Selected indicator overlay */}
              {selectedCategory === category && (
                <motion.div
                  layoutId="selectedIndicator"
                  className="absolute inset-0 living-gradient"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30
                  }}
                />
              )}
              
              {/* Button text */}
              <span className="relative z-10 flex items-center gap-2">
                {category}
                {/* Auto-scroll indicator for Leadership */}
                {category === "Leadership" && selectedCategory === "Leadership" && isAutoScrolling && (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="w-3 h-3 border border-white/50 border-t-white rounded-full"
                  />
                )}
              </span>
              
              {/* Hover glow effect for non-selected buttons */}
              {selectedCategory !== category && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Experience Stacked Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative max-w-5xl mx-auto h-[540px] flex items-center justify-center -mt-22"
        >
          {filteredExperiences.length === 1 ? (
            // Single card - centered
            <motion.div
              key={filteredExperiences[0].id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-lg"
            >
              <ExperienceCard experience={filteredExperiences[0]} isSelected={true} />
            </motion.div>
          ) : (
            // Multiple cards - stacked design with enhanced side previews
            <div className="relative w-full h-full">
              {filteredExperiences.map((experience, index) => {
                const isActive = index === selectedCardIndex
                const isBehind = index < selectedCardIndex
                const distance = Math.abs(index - selectedCardIndex)
                
                // Enhanced positioning for better side previews
                let translateX = 0;
                let translateY = 0;
                let scale = 1;
                let opacity = 1;
                let blur = 0;
                let rotateY = 0;
                let rotateZ = 0;

                if (isActive) {
                  // Main card - center, full visibility
                  translateX = 0;
                  translateY = 0;
                  scale = 1;
                  opacity = 1;
                  blur = 0;
                } else if (distance === 1) {
                  // Adjacent cards - visible side previews
                  translateX = isBehind ? -180 : 180;
                  translateY = 30;
                  scale = 0.85;
                  opacity = 0.6;
                  blur = 3;
                  rotateY = isBehind ? 25 : -25;
                  rotateZ = isBehind ? -8 : 8;
                } else {
                  // Further cards - more distant, more blurred
                  translateX = isBehind ? -280 : 280;
                  translateY = 50 + (distance - 1) * 20;
                  scale = Math.max(0.7, 1 - (distance * 0.15));
                  opacity = Math.max(0.2, 0.6 - (distance - 1) * 0.2);
                  blur = 3 + (distance - 1) * 2;
                  rotateY = isBehind ? 35 : -35;
                  rotateZ = isBehind ? -12 : 12;
                }
                
                return (
                  <motion.div
                    key={experience.id}
                    className={`absolute inset-0 flex items-center justify-center cursor-pointer transition-all duration-700 ease-out ${
                      isActive ? 'z-30' : distance === 1 ? 'z-20' : 'z-10'
                    }`}
                    style={{
                      transform: `
                        translateX(${translateX}px)
                        translateY(${translateY}px)
                        scale(${scale})
                        rotateY(${rotateY}deg)
                        rotateZ(${rotateZ}deg)
                      `,
                      opacity: opacity,
                      filter: `blur(${blur}px)`,
                    }}
                    onClick={() => handleManualCardChange(index)}
                    whileHover={isActive ? { scale: 1.02 } : { scale: 1 - (distance * 0.1) + 0.02 }}
                    transition={{ 
                      duration: 0.3,
                      ease: "easeOut"
                    }}
                  >
                    <div className="w-full max-w-lg">
                      <ExperienceCard 
                        experience={experience} 
                        isSelected={isActive}
                        isBackground={!isActive}
                      />
                    </div>
                  </motion.div>
                )
              })}

              {/* Navigation arrows with circular scrolling */}
              <button
                onClick={() => {
                  const prevIndex = selectedCardIndex === 0 ? filteredExperiences.length - 1 : selectedCardIndex - 1;
                  handleManualCardChange(prevIndex);
                }}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 rounded-full backdrop-blur-sm border border-border/50 flex items-center justify-center transition-all duration-300 z-40 bg-card/80 hover:bg-card hover:scale-110 cursor-pointer shadow-lg"
              >
                <ChevronRight className="w-4 h-4 rotate-180 text-purple-500" />
              </button>

              <button
                onClick={() => {
                  const nextIndex = selectedCardIndex === filteredExperiences.length - 1 ? 0 : selectedCardIndex + 1;
                  handleManualCardChange(nextIndex);
                }}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 rounded-full backdrop-blur-sm border border-border/50 flex items-center justify-center transition-all duration-300 z-40 bg-card/80 hover:bg-card hover:scale-110 cursor-pointer shadow-lg"
              >
                <ChevronRight className="w-4 h-4 text-purple-500" />
              </button>
            </div>
          )}
        </motion.div>

        {/* Summary stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <motion.div
              className="text-3xl font-bold text-purple-500 mb-2"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              4
            </motion.div>
            <p className="text-muted-foreground">Leadership Roles</p>
          </div>
          <div className="text-center">
            <motion.div
              className="text-3xl font-bold text-cyan-500 mb-2"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              7+
            </motion.div>
            <p className="text-muted-foreground">Figure Revenue Generated</p>
          </div>
          <div className="text-center">
            <motion.div
              className="text-3xl font-bold text-blue-500 mb-2"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              7+
            </motion.div>
            <p className="text-muted-foreground">Company Partnerships</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

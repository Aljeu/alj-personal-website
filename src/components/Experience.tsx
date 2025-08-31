"use client"

import { motion, useInView, Variants } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { 
  Calendar,
  MapPin,
  Building,
  ChevronRight,
  Award,
  Briefcase,
  Crown,
  TrendingUp
} from "lucide-react"

const experiences = [
  {
    id: 1,
    title: "Intern",
    company: "DOST-ITDI, Materials Science Division, Special Materials Section",
    location: "Philippines",
    duration: "2025",
    type: "Internship",
    description: "Gained hands-on experience in advanced materials research and 3D printing technologies for industrial applications.",
    achievements: [
      "Trained in 3D printing workflows and research for industrial applications",
      "Applied materials knowledge to improve properties and optimize processes",
      "Assisted in MAST3R projects, gaining insights into materials science and engineering"
    ],
    technologies: ["3D Printing", "Materials Science", "Research", "MAST3R"],
    featured: true
  },
  {
    id: 2,
    title: "Director",
    company: "UP Fair Kalye Tunes 2025",
    location: "University of the Philippines",
    duration: "2025",
    type: "Leadership",
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
    description: "Led comprehensive financial management for a major university fair event with significant revenue generation.",
    achievements: [
      "Led financial management for a major university fair event",
      "Generated seven figures in sales with profit-driven strategies",
      "Assessed financial risks to ensure success"
    ],
    technologies: ["Financial Management", "Risk Assessment", "Sales Strategy", "Profit Optimization"],
    featured: false
  }
]

export const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-200px" })
  
  const [displayedText, setDisplayedText] = useState("")
  const [showCursor, setShowCursor] = useState(false)
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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
    },
  }

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-2"
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              variants={itemVariants}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-border hover:shadow-xl transition-all duration-300 h-full">
                {/* Header with icon and type badge */}
                <div className="flex items-start justify-between mb-4">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {experience.type === "Internship" && <Briefcase className="w-6 h-6 text-white" />}
                    {experience.type === "Leadership" && <Crown className="w-6 h-6 text-white" />}
                    {experience.type === "Education" && <Award className="w-6 h-6 text-white" />}
                    {experience.type === "Finance" && <TrendingUp className="w-6 h-6 text-white" />}
                  </motion.div>
                  
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    experience.type === "Internship" ? "bg-blue-500/20 text-blue-400" :
                    experience.type === "Leadership" ? "bg-purple-500/20 text-purple-400" :
                    experience.type === "Education" ? "bg-green-500/20 text-green-400" :
                    "bg-orange-500/20 text-orange-400"
                  }`}>
                    {experience.type}
                  </span>
                </div>

                {/* Title and company */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold group-hover:text-purple-500 transition-colors mb-2">
                    {experience.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-muted-foreground mb-2">
                    <Building className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm font-medium">{experience.company}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{experience.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{experience.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {experience.description}
                </p>

                {/* Achievements */}
                <div className="space-y-2 mb-4">
                  {experience.achievements.map((achievement, achievementIndex) => (
                    <motion.div
                      key={achievementIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: (index * 0.1) + (achievementIndex * 0.05) + 0.3 }}
                      className="flex items-start space-x-2"
                    >
                      <ChevronRight className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{achievement}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Technologies/Skills */}
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, delay: (index * 0.1) + (techIndex * 0.05) + 0.5 }}
                      className="px-3 py-1 bg-accent/50 text-accent-foreground rounded-full text-xs font-medium border border-border/50 hover:bg-accent/70 transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
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

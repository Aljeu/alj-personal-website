"use client"

import { motion, useInView, Variants } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { useViewportSection } from "@/hooks/useViewportSection"

const projects = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js and Framer Motion, featuring dark mode toggle and smooth animations.",
    image: "/api/placeholder/600/400",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A full-stack task management application with user authentication, CRUD operations, and real-time updates using React and Node.js.",
    image: "/api/placeholder/600/400",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather application that displays current weather and forecasts using OpenWeatherMap API with location-based search.",
    image: "/api/placeholder/600/400",
    tags: ["JavaScript", "HTML/CSS", "Weather API", "Bootstrap"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false
  },
  {
    id: 4,
    title: "Student Grade Calculator",
    description: "A Python application for calculating student grades with data visualization using matplotlib and pandas for academic analysis.",
    image: "/api/placeholder/600/400",
    tags: ["Python", "Pandas", "Matplotlib", "Data Analysis"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false
  },
  {
    id: 5,
    title: "E-commerce Product Catalog",
    description: "A responsive product catalog website with search functionality, filtering, and shopping cart features built with vanilla JavaScript.",
    image: "/api/placeholder/600/400",
    tags: ["JavaScript", "HTML/CSS", "Local Storage", "Responsive Design"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false
  },
  {
    id: 6,
    title: "Social Media Clone",
    description: "A simplified social media application with user posts, likes, and comments functionality using React and Firebase.",
    image: "/api/placeholder/600/400",
    tags: ["React", "Firebase", "CSS Modules", "Authentication"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false
  }
]

export const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-200px" })
  const { getSectionHeight, getVerticalSpacing, getHorizontalSpacing, getContainerMaxWidth } = useViewportSection()
  const [filter, setFilter] = useState("all")
  
  const [displayedText, setDisplayedText] = useState("")
  const [showCursor, setShowCursor] = useState(false)
  const headerText = "A showcase of my recent work, featuring web applications, mobile apps, and creative experiments"

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
      }, 35)
    }, 800)

    return () => clearTimeout(timer)
  }, [isInView])

  const filteredProjects = filter === "all" 
    ? projects 
    : filter === "featured" 
    ? projects.filter(p => p.featured)
    : projects.filter(p => !p.featured)

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <section 
      id="projects" 
      className={`${getSectionHeight()} ${getVerticalSpacing()} ${getHorizontalSpacing()} relative overflow-hidden flex items-center`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
      
      <div className={`${getContainerMaxWidth()} mx-auto w-full relative z-10`} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 gradient-text-heading">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8 min-h-[60px]">
            {displayedText}
            {showCursor && (
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-0.5 h-6 bg-purple-500 ml-1"
              />
            )}
          </p>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center space-x-4 mb-12"
          >
            {["all", "featured", "other"].map((filterType) => (
              <Button
                key={filterType}
                variant={filter === filterType ? "default" : "outline"}
                onClick={() => setFilter(filterType)}
                className="capitalize"
              >
                {filterType === "all" ? "All Projects" : filterType}
              </Button>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full overflow-hidden group cursor-pointer border-border/50 hover:border-border bg-card/50 backdrop-blur-sm">
                <div className="relative overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
                    <div className="text-6xl font-bold text-muted-foreground/20">
                      {project.id}
                    </div>
                  </div>
                  <motion.div
                    className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </a>
                    </Button>
                  </motion.div>
                </div>
                
                <CardHeader>
                  <CardTitle className="group-hover:text-purple-500 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-accent/50 text-accent-foreground rounded text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Button variant="outline" size="lg" className="px-8 py-3 h-auto" asChild>
            <a 
              href="https://github.com/Aljeu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3"
            >
              <Github className="w-5 h-5" />
              <span>View All Projects on GitHub</span>
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import { useRef } from "react"
import { cubicBezier } from "framer-motion";

const customEase = cubicBezier(0.42, 0, 0.58, 1);
const projects = [
  {
    id: 1,
    title: "MakeMyScan - Website Vulnerability Scanner",
    description:
      "A comprehensive security scanning platform built with Next.js and Django that performs automated vulnerability assessments on websites.",
    longDescription:
      "MakeMyScan is a professional security scanning tool that helps identify vulnerabilities in websites. Built with Next.js for the frontend and Django for the backend, it provides detailed security reports and recommendations for improving website security.",
    image: "/placeholder.svg?height=400&width=600",
    tech: ["Next.js", "Django", "Python", "PostgreSQL", "Security APIs", "Tailwind CSS"],
    github: "#",
    live: "https://makemyscan.com/",
    featured: true,
    category: "Security Tool",
  },
  {
    id: 2,
    title: "DHN Data Visualization & BI Tool",
    description:
      "Interactive data visualization dashboard built with React and Recharts for comprehensive business intelligence and data analysis.",
    longDescription:
      "A powerful business intelligence platform that transforms complex data into interactive visualizations. Features real-time data processing, customizable dashboards, and advanced analytics capabilities for data-driven decision making.",
    image: "/placeholder.svg?height=400&width=600",
    tech: ["React", "Recharts", "TypeScript", "Node.js", "PostgreSQL", "Chart.js"],
    github: "#",
    live: "https://dh.monaltech.com/",
    featured: true,
    category: "Data Visualization",
  },
  {
    id: 3,
    title: "Nebham Patro - Nepali Calendar App",
    description:
      "A comprehensive Nepali/English calendar application with cultural events, festivals, and date conversion features.",
    longDescription:
      "Nebham Patro is a feature-rich calendar application that bridges Nepali and English calendar systems. Includes festival dates, cultural events, and seamless date conversion functionality.",
    image: "/placeholder.svg?height=400&width=600",
    tech: ["React", "React Native", "TypeScript", "Node.js", "MongoDB"],
    github: "#",
    live: "https://www.nebhampatro.com/",
    featured: false,
    category: "Mobile App",
  },
  {
    id: 4,
    title: "Weather Prediction & Visualization",
    description:
      "Real-time weather forecasting application with interactive charts and dynamic UI for enhanced user experience.",
    longDescription:
      "A modern weather application featuring real-time forecasts, interactive data visualizations using Chart.js, and a responsive design for optimal user experience across all devices.",
    image: "/placeholder.svg?height=400&width=600",
    tech: ["React", "Chart.js", "Weather API", "Tailwind CSS", "JavaScript"],
    github: "#",
    live: "https://sachitweather.netlify.app/",
    featured: false,
    category: "Web App",
  },
  {
    id: 5,
    title: "Bike Rental System with AI",
    description:
      "E-commerce ERP system with AI-powered bike recommendations using cosine similarity and KNN algorithms.",
    longDescription:
      "An intelligent bike rental platform that uses machine learning algorithms to provide personalized bike recommendations. Features include inventory management, user profiles, and AI-driven suggestions.",
    image: "/placeholder.svg?height=400&width=600",
    tech: ["Django", "Next.js", "Python", "Machine Learning", "PostgreSQL", "AI/ML"],
    github: "https://github.com/Sachit0-0/project_rental_system_ai",
    live: "#",
    featured: false,
    category: "AI/ML",
  },
  {
    id: 6,
    title: "Portfolio Websites Collection",
    description: "Custom portfolio and landing page websites with interactive animations using Framer Motion and GSAP.",
    longDescription:
      "A collection of beautifully crafted portfolio websites featuring smooth animations, responsive designs, and modern UI/UX principles. Each site is tailored to showcase individual personalities and professional achievements.",
    image: "/placeholder.svg?height=400&width=600",
    tech: ["Next.js", "Framer Motion", "GSAP", "Tailwind CSS", "TypeScript"],
    github: "#",
    live: "https://sachit.info.np",
    featured: false,
    category: "Portfolio",
  },
]

export function ProjectsShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: customEase,
      },
    },
  }

  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />

      <div className="container mx-auto px-4" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8" />
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing innovative solutions and cutting-edge web applications
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          className="space-y-32 mb-32"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              {/* Project Image */}
              <motion.div
                className={`relative group ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 p-8">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-80 object-cover rounded-xl shadow-2xl group-hover:shadow-3xl transition-shadow duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                </div>
              </motion.div>

              {/* Project Info */}
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <div>
                  <Badge variant="secondary" className="mb-4">
                    {project.category}
                  </Badge>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{project.longDescription}</p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  <Button
                    variant="default"
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  {project.github !== "#" && (
                    <Button variant="outline" size="lg" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-16">More Projects</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/30">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <div className="flex space-x-2">
                        {project.github !== "#" && (
                          <Button size="sm" variant="secondary" asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4" />
                            </a>
                          </Button>
                        )}
                        {project.live !== "#" && (
                          <Button size="sm" variant="secondary" asChild>
                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary">{project.category}</Badge>
                    </div>
                    <h4 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.tech.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button size="lg" variant="outline" className="group bg-transparent" asChild>
            <a href="https://github.com/Sachit0-0" target="_blank" rel="noopener noreferrer">
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

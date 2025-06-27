"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import { useRef } from "react"

export function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <section ref={ref} id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <motion.div className="absolute inset-0" style={{ y, opacity }}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-pink-950/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,119,198,0.1),transparent_50%)]" />
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-3xl"
        animate={{
          x: [0, -120, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          {/* Greeting */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Hello, I'm
          </motion.p>

          {/* Name with Gradient */}
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Sachit Dahal
            </span>
          </motion.h1>

          {/* Animated Title */}
          <motion.div
            className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-8 h-16 flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.span
              key="title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-foreground"
            >
              Full Stack Developer
            </motion.span>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Building scalable, responsive web applications with React, Next.js, and Django.
            <br />
            <span className="text-primary">Passionate about creating exceptional user experiences.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-4 text-lg rounded-full border-2 hover:bg-foreground hover:text-background transition-all duration-300 bg-transparent"
              asChild
            >
              <a href="https://sachit.info.np" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-5 h-5 mr-2" />
                Visit Portfolio
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { icon: Github, href: "https://github.com/Sachit0-0", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/sachit-da-hal-59a05b212/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:sachitdahal33@gmail.com", label: "Email" },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-muted/50 backdrop-blur-sm border border-border/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        onClick={() => scrollToSection("about")}
      >
        <div className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-sm font-medium">Scroll Down</span>
          <ArrowDown className="w-5 h-5" />
        </div>
      </motion.div>
    </section>
  )
}

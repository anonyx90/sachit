"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Code2, Database, Palette, Smartphone, Brain } from "lucide-react"

// Skill data with new tools added
const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React/Next.js", level: 95, description: "Advanced component architecture, SSR, SSG" },
      { name: "TypeScript", level: 90, description: "Type-safe development, advanced patterns" },
      { name: "Tailwind CSS", level: 90, description: "Utility-first styling, responsive design" },
      { name: "React Query", level: 80, description: "Data fetching, caching, synchronization" },
      { name: "Zustand", level: 75, description: "Lightweight state management" },
    ],
  },
  {
    title: "Backend Development",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", level: 92, description: "Express, Fastify, microservices architecture" },
      { name: "Python", level: 85, description: "Django, FastAPI, data processing" },
      { name: "PostgreSQL", level: 88, description: "Complex queries, optimization, migrations" },
      { name: "GraphQL", level: 80, description: "Schema design, resolvers, Apollo" },
      { name: "Prisma ORM", level: 78, description: "Type-safe database modeling & migrations" },
    ],
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "React Native", level: 85, description: "Cross-platform apps, native modules" },
      { name: "Expo", level: 70, description: "Rapid development and deployment" },
    ],
  },
  {
    title: "Design & UX",
    icon: Palette,
    color: "from-pink-500 to-rose-500",
    skills: [
      { name: "UI/UX Design", level: 82, description: "User research, wireframing, prototyping" },
      { name: "Figma", level: 85, description: "Design systems, component libraries" },
      { name: "Design Systems", level: 80, description: "Component libraries, style guides" },
      { name: "Accessibility", level: 78, description: "WCAG compliance, semantic markup" },
    ],
  },
  {
    title: "Emerging Technologies",
    icon: Brain,
    color: "from-violet-500 to-purple-500",
    skills: [
      { name: "AI / Machine Learning", level: 75, description: "TensorFlow, PyTorch, model training" },
      { name: "WebGL / Three.js", level: 65, description: "3D graphics, interactive experiences" },
      { name: "Serverless", level: 70, description: "AWS Lambda, Vercel Functions" },
    ],
  },
]

// Circular progress component for modern style
const CircularProgress = ({ value, delay = 0 }: { value: number; delay?: number }) => {
  const [progress, setProgress] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    let animationFrame: number
    let start: number | null = null

    function animate(ts: number) {
      if (start === null) start = ts
      const elapsed = ts - start
      const duration = 900 // ms
      const eased = Math.min(elapsed / duration, 1)
      const nextValue = Math.round(eased * value)
      setProgress(nextValue)
      if (eased < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    let timeout: NodeJS.Timeout
    if (isInView) {
      timeout = setTimeout(() => {
        animationFrame = requestAnimationFrame(animate)
      }, delay)
    }
    return () => {
      clearTimeout(timeout)
      cancelAnimationFrame(animationFrame)
    }
  }, [isInView, value, delay])

  // SVG circle params
  const radius = 18
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (progress / 100) * circumference

  return (
    <div
      ref={ref}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={progress}
      className="w-12 h-12 relative"
    >
      <svg className="transform -rotate-90 w-12 h-12">
        <circle
          className="text-gray-200 dark:text-gray-700"
          strokeWidth="4"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="24"
          cy="24"
        />
        <circle
          className="text-blue-500 dark:text-cyan-400 transition-stroke duration-700"
          strokeWidth="4"
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="24"
          cy="24"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-gray-700 dark:text-gray-200 select-none">
        {progress}%
      </div>
    </div>
  )
}

const SkillCard = ({ category, index }: { category: typeof skillCategories[0]; index: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 flex flex-col justify-between hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300"
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div
          className={`w-14 h-14 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center text-white text-2xl shadow-md group-hover:scale-110 transition-transform duration-300`}
        >
          <category.icon className="w-7 h-7" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{category.title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Professional expertise</p>
        </div>
      </div>

      {/* Skills List */}
      <div className="flex flex-col gap-6">
        {category.skills.map((skill, skillIndex) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.15 + skillIndex * 0.1 }}
            className="flex items-center justify-between"
          >
            <div>
              <h4 className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">{skill.description}</p>
            </div>
            <CircularProgress value={skill.level} delay={index * 150 + skillIndex * 80} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export function SkillsExpertise() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="skills"
      className="relative py-28 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* Background blobs */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[320px] h-[320px] rounded-full bg-gradient-to-tr from-pink-400/15 to-purple-400/15 blur-2xl animate-pulse" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
            Skills &{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <div className="mx-auto mb-8 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-md" />
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-medium">
            Comprehensive technical skills across the full development stack
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

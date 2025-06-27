"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"

const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Tech", link: "#technologies" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
]

interface MobileMenuProps {
  activeSection: string
  onSectionClick: (sectionId: string) => void
}

export function MobileMenu({ activeSection, onSectionClick }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleSectionClick = (link: string) => {
    onSectionClick(link)
    setIsOpen(false)
  }

  return (
    <div className="md:hidden">
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border/50"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isOpen ? "close" : "menu"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.div>
          </AnimatePresence>
        </Button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-16 right-0 bg-background/95 backdrop-blur-md border border-border/50 rounded-2xl shadow-xl z-50 min-w-[200px]"
            >
              <div className="p-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    onClick={() => handleSectionClick(item.link)}
                    className={cn(
                      "w-full text-left px-4 py-3 rounded-xl transition-all duration-200 flex items-center gap-3",
                      activeSection === item.link.substring(1)
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                    )}
                  >
                    {activeSection === item.link.substring(1) && (
                      <motion.div
                        layoutId="activeMobileSection"
                        className="w-2 h-2 bg-primary rounded-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span>{item.name}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

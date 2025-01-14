"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { techStack } from "@/config/techStack"

export default function TechStackCarousel() {
  const [activeCategory, setActiveCategory] = useState<string>(Object.keys(techStack)[0])
  const containerRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || !itemsRef.current) return

    // Rotate through categories
    const categoryInterval = setInterval(() => {
      setActiveCategory(current => {
        const categories = Object.keys(techStack)
        const currentIndex = categories.indexOf(current)
        return categories[(currentIndex + 1) % categories.length]
      })
    }, 5000) // Switch category every 5 seconds

    return () => clearInterval(categoryInterval)
  }, [])

  useEffect(() => {
    if (!itemsRef.current) return

    // Animate items when category changes
    gsap.fromTo(
      `.tech-item`,
      { 
        opacity: 0, 
        y: 20,
        scale: 0.9
      },
      { 
        opacity: 1, 
        y: 0,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out"
      }
    )
  }, [activeCategory])

  return (
    <div ref={containerRef} className="w-full max-w-3xl mx-auto">
      {/* Category Navigation */}
      <div className="flex justify-center gap-4 mb-6">
        {Object.keys(techStack).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`text-sm px-3 py-1 rounded-full transition-colors ${
              activeCategory === category
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-primary"
            }`}
          >
            {category.replace("-", " & ")}
          </button>
        ))}
      </div>

      {/* Tech Items */}
      <div ref={itemsRef} className="h-[120px] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="flex flex-wrap justify-center gap-8 px-4">
            {techStack[activeCategory].map((tech) => (
              <div
                key={tech.name}
                className="tech-item flex flex-col items-center gap-2"
              >
                <div className="relative w-12 h-12 flex items-center justify-center group">
                  <tech.icon className="text-2xl opacity-70 group-hover:opacity-100 transition-opacity transform group-hover:scale-110 duration-200" />
                </div>
                <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
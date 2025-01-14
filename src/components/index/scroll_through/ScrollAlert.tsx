"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const SECTIONS = [
  { id: "journey", title: "My Journey" },
  { id: "expertise", title: "Areas of Expertise" },
  { id: "publications", title: "Publications" }
]

const INITIAL_MESSAGE = "Scroll Down to learn more about my work."

export default function ScrollAlert() {
  const chevronRef = useRef<HTMLDivElement>(null)
  const [currentSection, setCurrentSection] = useState<string>(INITIAL_MESSAGE)

  useEffect(() => {
    if (typeof window === 'undefined' || !chevronRef.current) return

    gsap.registerPlugin(ScrollTrigger)

    // Create infinite bounce animation
    const bounceAnimation = gsap.to(chevronRef.current, {
      y: 10,
      opacity: 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    })

    // Create a single ScrollTrigger for all sections
    const updateSection = () => {
      const scrollPosition = window.scrollY
      const viewportHeight = window.innerHeight
      
      // Check for Publications section first
      const publicationsSection = document.getElementById('publications')
      if (publicationsSection) {
        const pubRect = publicationsSection.getBoundingClientRect()
        if (pubRect.top < viewportHeight * 0.7) {
          gsap.to(chevronRef.current, { 
            opacity: 0, 
            duration: 0.3,
            onComplete: () => {
              if (chevronRef.current) {
                chevronRef.current.style.display = 'none'
              }
            }
          })
          return
        } else {
          if (chevronRef.current) {
            chevronRef.current.style.display = 'flex'
          }
        }
      }

      // More aggressive check for top of page
      if (scrollPosition < viewportHeight * 0.3) {
        setCurrentSection(INITIAL_MESSAGE)
        gsap.to(chevronRef.current, { opacity: 1, duration: 0.3 })
        return
      }

      // Find current section
      for (let i = 0; i < SECTIONS.length; i++) {
        const section = document.getElementById(SECTIONS[i].id)
        if (!section) continue

        const sectionRect = section.getBoundingClientRect()
        const sectionTop = scrollPosition + sectionRect.top
        const sectionMiddle = sectionTop + (sectionRect.height / 2)

        // Adjust trigger point to be earlier in the section
        if (scrollPosition + (viewportHeight * 0.6) >= sectionTop && 
            scrollPosition + (viewportHeight * 0.4) <= sectionMiddle) {
          // If there's a next section, show it as the target
          if (i < SECTIONS.length - 1) {
            setCurrentSection(`Scroll to ${SECTIONS[i + 1].title}`)
            gsap.to(chevronRef.current, { opacity: 1, duration: 0.3 })
          }
          return
        }
      }
    }

    // Add scroll listener with throttling
    let timeout: NodeJS.Timeout
    const handleScroll = () => {
      if (timeout) clearTimeout(timeout)
      timeout = setTimeout(updateSection, 100)
    }

    window.addEventListener('scroll', handleScroll)
    updateSection() // Run once on mount

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (timeout) clearTimeout(timeout)
      bounceAnimation.kill()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div 
      ref={chevronRef}
      className="z-50 fixed flex flex-col bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground items-center bg-slate-300/60 backdrop-blur-sm border-2 rounded-md text-center p-2"
    >
      <p className="text-sm">{currentSection}</p>
      <ChevronDown 
        className="w-6 h-6 animate-pulse"
        strokeWidth={1.5}
      />
    </div>
  )
}
"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Expertise, Journey, OpenSource, Projects, Publications } from "./sections"

gsap.registerPlugin(ScrollTrigger)

export default function ScrollSections() {
  const sectionsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionsRef.current) return

    // Animate sections as they come into view
    const sections = sectionsRef.current.children
    Array.from(sections).forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse"
        }
      })
    })
  }, [])

  return (
    <div ref={sectionsRef} className="max-w-3xl space-y-32 py-16">
      <Journey />
      <Expertise />
      <Projects />
      <Publications />
      <OpenSource />
    </div>
  )
}
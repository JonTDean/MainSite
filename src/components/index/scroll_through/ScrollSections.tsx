"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Expertise, Journey, TechnicalWriting } from "./sections"

gsap.registerPlugin(ScrollTrigger)

export default function ScrollSections() {
  const sectionsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionsRef.current) return

    // Ensure GSAP and ScrollTrigger are registered
    gsap.registerPlugin(ScrollTrigger)

    // Force a refresh of ScrollTrigger
    ScrollTrigger.refresh()

    // Create context to ensure proper cleanup
    const ctx = gsap.context(() => {
      // Animate sections as they come into view
      const sections = sectionsRef.current!.children
      Array.from(sections).forEach((section) => {
        gsap.from(section, {
          opacity: 0,
          y: 50,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play reverse reverse reset",
            scrub: 1
          }
        })
      })
    }, sectionsRef)

    return () => {
      // Clean up context and ScrollTrigger instances
      ctx.revert()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div ref={sectionsRef} className="max-w-3xl space-y-32 py-16">
      <Journey />
      <Expertise />
      <TechnicalWriting />
    </div>
  )
}
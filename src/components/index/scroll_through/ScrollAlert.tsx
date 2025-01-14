"use client"

import { useEffect, useRef } from "react"
import { ChevronDown } from "lucide-react"
import gsap from "gsap"

export default function ScrollAlert() {
  const chevronRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chevronRef.current) return

    // Create infinite bounce animation
    gsap.to(chevronRef.current, {
      y: 10,
      opacity: 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    })

    // Fade out on scroll
    const handleScroll = () => {
      if (window.scrollY > 100) {
        gsap.to(chevronRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out"
        })
      } else {
        gsap.to(chevronRef.current, {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out"
        })
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div 
      ref={chevronRef}
      className="fixed flex flex-col bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground items-center"
    >
      <p className="text-sm">Scroll Down to learn more about my work.</p>
      <ChevronDown 
        className="w-6 h-6 animate-pulse"
        strokeWidth={1.5}
      />
    </div>
  )
}
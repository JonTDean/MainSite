"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"

const titles = [
  "Data Engineer",
  "ASP.Net Full Stack Developer",
  "Computer Systems Administrator",
  "Computer Science Instructor"
]

export default function TitleShower() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    // Initial animation
    gsap.from(titleRef.current, {
      y: -20,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out"
    })

    const interval = setInterval(() => {
      // Animate out
      gsap.to(titleRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length)
          // Animate in
          gsap.fromTo(
            titleRef.current,
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
          )
        }
      })
    }, 3000) // Change title every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-[2.5rem] relative flex items-center justify-center w-full">
      <h2
        ref={titleRef}
        className="absolute text-2xl font-medium text-muted-foreground"
      >
        {titles[currentIndex]}
      </h2>
    </div>
  )
}

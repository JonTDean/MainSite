"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { timelineItems } from "@/config/timelineItems"

export function Timeline() {
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!timelineRef.current) return

    gsap.registerPlugin(ScrollTrigger)

    // Get all timeline items
    const items = gsap.utils.toArray<HTMLElement>('.timeline-item')
    
    // Set initial state
    gsap.set(items, {
      opacity: 0,
      x: -30
    })
    
    // Animate each timeline item individually
    items.forEach((item, index) => {
      gsap.to(item, {
        opacity: 1,
        x: 0,
        duration: 0.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top bottom-=150",
          toggleActions: "play none none reverse",
          scrub: 0.5,
          // markers: true, // Uncomment for debugging
        },
        delay: index * 0.1
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  const formatDate = (date: Date | "Present") => {
    if (date === "Present") return "Present"
    return new Date(date).toLocaleDateString("en-US", { 
      month: "short",
      year: "numeric"
    })
  }

  return (
    <div id="timeline" ref={timelineRef} className="relative mt-8 ml-4">
      {/* Timeline line */}
      <div className="absolute left-0 top-0 h-full w-0.5 bg-muted" />

      {/* Timeline items */}
      <div className="space-y-12">
        {timelineItems.map((item, index) => (
          <div
            key={index}
            className="timeline-item relative pl-8"
          >
            {/* Timeline dot */}
            <div className="absolute left-[-0.3125rem] h-2.5 w-2.5 rounded-full bg-primary" />

            <div className="rounded-lg border bg-card p-4 shadow-sm">
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{item.name}</h3>
                  <span className="text-sm text-muted-foreground">
                    {formatDate(item.dateStarted)} - {formatDate(item.dateEnded)}
                  </span>
                </div>
                
                {item.role && (
                  <span className="text-sm font-medium text-primary">
                    {item.role}
                  </span>
                )}
                
                {item.location && (
                  <span className="text-sm text-muted-foreground">
                    {item.location}
                  </span>
                )}
                
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 
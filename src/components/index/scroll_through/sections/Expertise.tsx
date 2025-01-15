"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { expertiseAreas } from "@/config/expertiseAreas"
import { cn } from "@/lib/utils"

gsap.registerPlugin(ScrollTrigger)

export function Expertise() {
    const sectionRef = useRef<HTMLDivElement>(null)
  
    useEffect(() => {
      if (!sectionRef.current) return
  
      gsap.registerPlugin(ScrollTrigger)
  
      // Get all cards with proper type assertion
      const cards = gsap.utils.toArray<HTMLElement>('.expertise-card')
      
      // Set initial state
      gsap.set(cards, {
        opacity: 0,
        y: 30
      })
      
      // Animate each card individually
      cards.forEach((card, index) => {
        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=150",
            toggleActions: "play none none reverse",
            scrub: false,
            once: false,
            // markers: true, // Uncomment for debugging
          },
          delay: index * 0.05 // Slight delay between each card
        })
      })
  
      return () => {
        ScrollTrigger.getAll().forEach(t => t.kill())
      }
    }, [])
  
    return (
      <section id="expertise" ref={sectionRef} className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Areas of Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className="expertise-card rounded-lg border bg-card p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <area.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">{area.title}</h3>
              </div>
              <p className="text-muted-foreground mb-6">{area.description}</p>
              <div className="space-y-4">
                {area.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                      <div
                        className={cn(
                          "h-full bg-primary transition-all duration-300"
                        )}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    )
}
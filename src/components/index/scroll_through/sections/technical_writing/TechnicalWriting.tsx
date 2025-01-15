"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import AcademicPapers from "./AcademicPapers"
import BlogPosts from "./BlogPosts"


export function TechnicalWriting() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    gsap.registerPlugin(ScrollTrigger)

    const items = gsap.utils.toArray<HTMLElement>('.writing-item')
    
    gsap.set(items, {
      opacity: 0,
      y: 30
    })
    
    items.forEach((item, index) => {
      gsap.to(item, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top bottom-=150",
          toggleActions: "play none none reverse",
        },
        delay: index * 0.05
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} id="technical-writing" className="flex flex-col mx-auto gap-y-4">
      <h2 className="text-3xl font-bold">Technical Writing</h2>
      <div className="flex flex-col gap-y-4">
        <BlogPosts />
        <AcademicPapers />
      </div>
    </section>
  )
}
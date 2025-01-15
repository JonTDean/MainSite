'use client';

import React, { useRef, useEffect, useState } from 'react';
import { type Project } from '@/config/dummyProjects';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register the plugin once
gsap.registerPlugin(ScrollTrigger);

type ProjectGridAnimationProps = {
  projects: Project[];
  scrollContainer: React.RefObject<HTMLDivElement | null>;
  children: (addToRefs: (el: HTMLDivElement | null) => void) => React.ReactNode;
};

export const ProjectGridAnimation = ({
  projects,
  scrollContainer,
  children,
}: ProjectGridAnimationProps) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const isFirstRender = useRef(true);
  const [hasMounted, setHasMounted] = useState(false);

  // Prevent rendering of GSAP-dependent code until after the client has mounted.
  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted || !scrollContainer?.current) return;

    gsap.registerPlugin(ScrollTrigger);

    // Clear any existing ScrollTriggers
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    
    const cards = cardsRef.current;
    if (!cards.length) return;

    // Set initial state
    gsap.set(cards, {
      opacity: 0,
      y: 30,
    });

    // Create animations for each card
    cards.forEach((card) => {
      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          scroller: scrollContainer.current,
          start: 'top bottom+=100',
          end: 'bottom center+=100',
          toggleActions: 'play none none reverse',
          // markers: true, // Uncomment to debug trigger points
        },
      });
    });

    // Initial animations for visible cards
    if (isFirstRender.current) {
      const initialCards = cards.filter((card) => {
        const rect = card.getBoundingClientRect();
        const containerRect = scrollContainer.current!.getBoundingClientRect();
        return rect.top < containerRect.bottom;
      });

      gsap.to(initialCards, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        stagger: {
          amount: 0.3,
          from: 'start',
        },
        delay: 0.2,
      });

      isFirstRender.current = false;
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.killTweensOf(cards);
    };
  }, [projects, hasMounted, scrollContainer]);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  // Until the component is mounted on the client, render null.
  if (!hasMounted) {
    return null;
  }

  return <div ref={gridRef}>{children(addToRefs)}</div>;
};

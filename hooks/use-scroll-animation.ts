"use client"

import { useState, useEffect, useRef } from "react"

export function useScrollAnimation(threshold: number = 0.2) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target) // animate once
          }
        })
      },
      { threshold }
    )

    observer.observe(node)

    return () => {
      if (node) observer.unobserve(node)
    }
  }, [threshold])

  return { ref, isVisible }
}

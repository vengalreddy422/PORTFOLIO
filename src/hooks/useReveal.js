import { useEffect, useRef } from 'react'

// Adds .in-view to any descendant with class "reveal" once it enters the viewport.
export default function useReveal(deps = []) {
  const containerRef = useRef(null)

  useEffect(() => {
    const root = containerRef.current
    if (!root) return
    const targets = root.classList.contains('reveal') ? [root] : Array.from(root.querySelectorAll('.reveal'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    targets.forEach((t) => observer.observe(t))
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return containerRef
}

import { useState, useEffect, useRef } from 'react'

export function useCountUp(end, duration = 2000, startOnView = true) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(!startOnView)
  const ref = useRef(null)
  const observerRef = useRef(null)

  useEffect(() => {
    if (!startOnView) {
      setHasStarted(true)
      return
    }

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true)
          observerRef.current?.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observerRef.current.observe(ref.current)
    return () => observerRef.current?.disconnect()
  }, [startOnView])

  useEffect(() => {
    if (!hasStarted) return

    let startTimestamp = null
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [hasStarted, end, duration])

  return { count, ref }
}

import { useRef, useState, useCallback } from 'react'
import './BorderGlow.css'

export default function BorderGlow({ children, className = '' }) {
  const cardRef = useRef(null)
  const [glowStyle, setGlowStyle] = useState({})

  const handleMouseMove = useCallback((e) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const angle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI)
    const distance = Math.sqrt(
      Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
    )
    const maxDist = Math.sqrt(
      Math.pow(centerX, 2) + Math.pow(centerY, 2)
    )
    const intensity = Math.min(1, distance / maxDist)

    setGlowStyle({
      '--glow-x': `${(x / rect.width) * 100}%`,
      '--glow-y': `${(y / rect.height) * 100}%`,
      '--glow-angle': `${angle}deg`,
      '--glow-intensity': intensity,
    })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setGlowStyle({})
  }, [])

  return (
    <div
      ref={cardRef}
      className={`border-glow ${className}`}
      style={glowStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}

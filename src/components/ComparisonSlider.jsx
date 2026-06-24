import { useState, useRef, useCallback, useEffect } from 'react'
import './ComparisonSlider.css'

export default function ComparisonSlider({
  beforeSrc = '/images/img-before.png',
  afterSrc = '/images/img-after.png',
  beforeLabel = 'Raw',
  afterLabel = 'Final',
}) {
  const [position, setPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef(null)

  const handleMove = useCallback((clientX) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setPosition((x / rect.width) * 100)
  }, [])

  const handleStart = useCallback((e) => {
    e.preventDefault()
    setIsDragging(true)
    const clientX = e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX
    handleMove(clientX)
  }, [handleMove])

  useEffect(() => {
    if (!isDragging) return

    const handleMoveGlobal = (e) => {
      handleMove(e.clientX)
    }
    const handleEnd = () => setIsDragging(false)

    window.addEventListener('mousemove', handleMoveGlobal)
    window.addEventListener('mouseup', handleEnd)
    window.addEventListener('touchmove', handleMoveGlobal, { passive: true })
    window.addEventListener('touchend', handleEnd)

    return () => {
      window.removeEventListener('mousemove', handleMoveGlobal)
      window.removeEventListener('mouseup', handleEnd)
      window.removeEventListener('touchmove', handleMoveGlobal)
      window.removeEventListener('touchend', handleEnd)
    }
  }, [isDragging, handleMove])

  return (
    <div
      ref={containerRef}
      className={`comparison-slider ${isDragging ? 'dragging' : ''}`}
      onMouseDown={handleStart}
      onTouchStart={handleStart}
      role="slider"
      tabIndex={0}
      aria-label="Before and after comparison"
      aria-valuenow={Math.round(position)}
    >
      <div className="comparison-before">
        <div className="comparison-image" style={{ backgroundImage: `url(${beforeSrc})` }} />
        <span className="comparison-label before">{beforeLabel}</span>
      </div>

      <div className="comparison-after" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <div className="comparison-image" style={{ backgroundImage: `url(${afterSrc})` }} />
        <span className="comparison-label after">{afterLabel}</span>
      </div>

      <div className="comparison-handle" style={{ left: `${position}%` }}>
        <div className="handle-circle">
          <svg width="20" height="20" viewBox="0 0 20 20">
            <path d="M8 4l-6 6 6 6M12 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

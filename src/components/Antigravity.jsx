import { useRef, useEffect, useCallback } from 'react'
import './Antigravity.css'

class FloatItem {
  constructor(el, bounds) {
    this.el = el
    this.originX = 0
    this.originY = 0
    this.x = 0
    this.y = 0
    this.vx = 0
    this.vy = 0
    this.amplitudeX = 2 + Math.random() * 8
    this.amplitudeY = 2 + Math.random() * 6
    this.phaseX = Math.random() * Math.PI * 2
    this.phaseY = Math.random() * Math.PI * 2
    this.speedX = 0.3 + Math.random() * 0.5
    this.speedY = 0.2 + Math.random() * 0.4
    this.time = Math.random() * 100
  }

  setOrigin(x, y) {
    this.originX = x
    this.originY = y
    this.x = x
    this.y = y
  }

  update(time, mouseX, mouseY, isHovering) {
    this.time += 0.016

    const floatX = Math.sin(this.time * this.speedX + this.phaseX) * this.amplitudeX
    const floatY = Math.cos(this.time * this.speedY + this.phaseY) * this.amplitudeY

    let targetX = this.originX + floatX
    let targetY = this.originY + floatY

    if (isHovering && mouseX !== null && mouseY !== null) {
      const dx = this.x - mouseX
      const dy = this.y - mouseY
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < 120) {
        const force = (120 - dist) / 120 * 1.5
        targetX += dx * force * 0.1
        targetY += dy * force * 0.1
      }
    }

    this.vx += (targetX - this.x) * 0.05
    this.vy += (targetY - this.y) * 0.05
    this.vx *= 0.85
    this.vy *= 0.85
    this.x += this.vx
    this.y += this.vy

    this.el.style.transform = `translate(${this.x}px, ${this.y}px)`
  }
}

export default function Antigravity({ children, className = '' }) {
  const containerRef = useRef(null)
  const itemsRef = useRef([])
  const mouseRef = useRef({ x: null, y: null, hovering: false })
  const rafRef = useRef(null)

  const init = useCallback(() => {
    if (!containerRef.current) return
    const container = containerRef.current
    const rect = container.getBoundingClientRect()
    const itemEls = container.querySelectorAll('.antigravity-item')

    itemsRef.current = Array.from(itemEls).map((el) => {
      const item = new FloatItem(el)
      const r = el.getBoundingClientRect()
      item.setOrigin(r.left - rect.left, r.top - rect.top)
      return item
    })
  }, [])

  const animate = useCallback(() => {
    itemsRef.current.forEach((item) => {
      item.update(
        performance.now() / 1000,
        mouseRef.current.x,
        mouseRef.current.y,
        mouseRef.current.hovering
      )
    })
    rafRef.current = requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    init()
    rafRef.current = requestAnimationFrame(animate)

    const resizeObserver = new ResizeObserver(() => {
      init()
    })
    resizeObserver.observe(container)

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect()
      mouseRef.current.x = e.clientX - rect.left
      mouseRef.current.y = e.clientY - rect.top
    }

    const handleMouseEnter = () => { mouseRef.current.hovering = true }
    const handleMouseLeave = () => { mouseRef.current.hovering = false }

    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseenter', handleMouseEnter)
    container.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      resizeObserver.disconnect()
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseenter', handleMouseEnter)
      container.removeEventListener('mouseleave', handleMouseLeave)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [init, animate])

  return (
    <div ref={containerRef} className={`antigravity ${className}`}>
      {children}
    </div>
  )
}

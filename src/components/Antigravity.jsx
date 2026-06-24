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
    this.phaseX = Math.random() * Math.PI * 2
    this.phaseY = Math.random() * Math.PI * 2
    this.scatterSpeedX = 0.5 + Math.random() * 0.8
    this.scatterSpeedY = 0.4 + Math.random() * 0.7
    this.scatterRadX = 25 + Math.random() * 25
    this.scatterRadY = 20 + Math.random() * 20
    this.time = Math.random() * 100
  }

  setOrigin(x, y) {
    this.originX = x
    this.originY = y
    this.x = x
    this.y = y
  }

  update(time, isHovering) {
    this.time += 0.016

    let targetX = this.originX
    let targetY = this.originY

    if (isHovering) {
      targetX += Math.sin(this.time * this.scatterSpeedX + this.phaseX) * this.scatterRadX
      targetY += Math.cos(this.time * this.scatterSpeedY + this.phaseY) * this.scatterRadY
    } else {
      targetX += Math.sin(this.time * 0.2 + this.phaseX) * 1
      targetY += Math.cos(this.time * 0.2 + this.phaseY) * 1
    }

    const damping = isHovering ? 0.06 : 0.1
    this.vx += (targetX - this.x) * damping
    this.vy += (targetY - this.y) * damping
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
  const hoveringRef = useRef(false)
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
        hoveringRef.current
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

    const handleMouseEnter = () => { hoveringRef.current = true }
    const handleMouseLeave = () => { hoveringRef.current = false }

    container.addEventListener('mouseenter', handleMouseEnter)
    container.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      resizeObserver.disconnect()
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

import { useState, useCallback } from 'react'
import './GooeyNav.css'

const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function GooeyNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = useCallback(() => setIsOpen((prev) => !prev), [])
  const close = useCallback(() => setIsOpen(false), [])

  return (
    <>
      <svg className="gooey-filter" aria-hidden="true">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -9"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <nav className={`gooey-nav ${isOpen ? 'open' : ''}`}>
        <button className="gooey-toggle" onClick={toggle} aria-label="Toggle navigation">
          <span className="toggle-line" />
          <span className="toggle-line" />
          <span className="toggle-line" />
        </button>

        <ul className="gooey-menu" onClick={close}>
          {NAV_ITEMS.map((item) => (
            <li key={item.href} className="gooey-item">
              <a href={item.href} className="gooey-link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

import { useState, useCallback } from 'react'
import './TestimonialsSection.css'

const TESTIMONIALS = [
  {
    name: 'Arun Kumar',
    role: 'Founder, Lumina Media',
    content:
      'Sriram transformed our raw footage into a cinematic masterpiece. His attention to pacing and color grading is exceptional. Will definitely work with him again.',
  },
  {
    name: 'Priya Rajan',
    role: 'Marketing Director, TechVista',
    content:
      'The motion graphics he created for our product launch exceeded expectations. He understood the brief immediately and delivered ahead of schedule.',
  },
  {
    name: 'Vikram Shetty',
    role: 'Filmmaker',
    content:
      'As a fellow creator, I was blown away by Sriram\'s editing skills. He has an intuitive sense of storytelling that\'s rare to find. Highly recommend.',
  },
  {
    name: 'Ananya Sharma',
    role: 'Event Manager, Weddings by Design',
    content:
      'Our wedding highlight reel is absolutely stunning. Sriram captured every emotion perfectly. Guests have been asking who edited it!',
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }, [])

  const testimonial = TESTIMONIALS[current]

  return (
    <section className="section testimonials">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">What People Say</h2>
        </div>

        <div className="testimonial-card reveal">
          <div className="testimonial-content">
            <svg className="testimonial-quote" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M14 18H8v-6h6v6zm18 0h-6v-6h6v6z" fill="currentColor" opacity="0.15"/>
              <path d="M16 26c-4 0-8-3-8-8v-6h6v6h-2c0 2 2 4 4 4v4zm18 0c-4 0-8-3-8-8v-6h6v6h-2c0 2 2 4 4 4v4z" fill="currentColor" opacity="0.15"/>
            </svg>
            <p className="testimonial-text">{testimonial.content}</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <div className="testimonial-name">{testimonial.name}</div>
                <div className="testimonial-role">{testimonial.role}</div>
              </div>
            </div>
          </div>

          <div className="testimonial-controls">
            <button onClick={prev} className="testimonial-arrow" aria-label="Previous">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12 4l-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className="testimonial-dots">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  className={`dot ${i === current ? 'active' : ''}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button onClick={next} className="testimonial-arrow" aria-label="Next">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M8 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

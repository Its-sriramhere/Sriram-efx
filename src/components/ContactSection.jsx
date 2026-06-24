import { useState, useCallback, useRef } from 'react'
import { supabase } from '../lib/supabase'
import './ContactSection.css'

const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/its.sriramhere',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="2" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="15.5" cy="4.5" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sriram-sundaram-801b51410',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="2" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6 9v5M6 6v.01M9 14v-4.5c0-1 .8-1.5 1.5-1.5s1.5.5 1.5 1.5V14M14 14v-3a2 2 0 00-2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'YouTube',
    url: '#',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="5" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 8l4 2-4 2V8z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: 'Behance',
    url: '#',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M2 5h6a2 2 0 012 2v1a2 2 0 01-2 2H2V5zM2 10h7a2 2 0 012 2v1a2 2 0 01-2 2H2v-5zM16 12a3 3 0 100 4M14 8h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
]

const INITIAL_FORM = {
  name: '',
  email: '',
  projectType: '',
  budget: '',
  message: '',
}

export default function ContactSection() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState('idle')
  const formRef = useRef(null)

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }, [])

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault()
    setStatus('sending')

    const { error } = await supabase.from('messages').insert({
      name: form.name,
      email: form.email,
      project_type: form.projectType,
      budget: form.budget,
      message: form.message,
    })

    if (error) {
      console.error('Supabase error:', error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    setStatus('sent')
    setForm(INITIAL_FORM)
    setTimeout(() => setStatus('idle'), 3000)
  }, [form])

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">
            Have a project in mind? Let's discuss how I can help bring it to life.
          </p>
        </div>

        <div className="contact-grid">
          <form ref={formRef} className="contact-form reveal" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="projectType" className="form-label">Project Type</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={form.projectType}
                  onChange={handleChange}
                  className="form-input form-select"
                  required
                >
                  <option value="">Select type...</option>
                  <option value="video-edit">Video Editing</option>
                  <option value="poster">Poster Designing</option>
                  <option value="social">Social Media Content</option>
                  <option value="commercial">Commercial / Ad</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="budget" className="form-label">Budget Range</label>
                <select
                  id="budget"
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  className="form-input form-select"
                  required
                >
                  <option value="">Select budget...</option>
                  <option value="<10k">Under ₹10,000</option>
                  <option value="10k-25k">₹10,000 - ₹25,000</option>
                  <option value="25k-50k">₹25,000 - ₹50,000</option>
                  <option value="50k+">₹50,000+</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                className="form-input form-textarea"
                placeholder="Tell me about your project..."
                rows={4}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary form-submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent!' : status === 'error' ? 'Failed — Try Again' : 'Send Message'}
              {status === 'idle' && (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </button>
          </form>

          <div className="contact-info reveal">
            <div className="contact-details">
              <h3 className="contact-info-title">Contact Info</h3>
              <div className="contact-item">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 6l6-4 6 4v8a1 1 0 01-1 1H4a1 1 0 01-1-1V6z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M6 9h6M6 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span>sriram.efx@gmail.com</span>
              </div>
              <div className="contact-item">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M16 12.5v2a1.33 1.33 0 01-1.45 1.33 13.13 13.13 0 01-5.72-2.04 12.94 12.94 0 01-3.97-3.97A13.13 13.13 0 012.17 3.45 1.33 1.33 0 013.5 2h2a1.33 1.33 0 011.34 1.15c.08.64.23 1.27.45 1.87a1.33 1.33 0 01-.3 1.4l-.57.57a10.66 10.66 0 003.97 3.97l.57-.57a1.33 1.33 0 011.4-.3c.6.22 1.23.37 1.87.45A1.33 1.33 0 0116 12.5z" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                <span>+91 9360516302</span>
              </div>

              <div className="contact-item" style={{ marginTop: 'var(--spacing-md)' }}>
                <a href="/Resume.pdf" download className="btn btn-outline" style={{ padding: '0.5rem 1.25rem', fontSize: 'var(--font-size-sm)' }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 2v8M5 7l3 3 3-3M3 12v1a1 1 0 001 1h8a1 1 0 001-1v-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>

            <div className="contact-social">
              <h3 className="contact-info-title">Follow Me</h3>
              <div className="social-links">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

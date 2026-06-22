import BorderGlow from './BorderGlow'
import './ServicesSection.css'

const SERVICES = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="8" width="24" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="16" cy="18" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Video Editing',
    description: 'Professional editing with seamless transitions, color grading, audio mixing, and pacing that keeps viewers engaged from start to finish.',
    gradient: 'cyan',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="6" width="24" height="20" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 12l6 4-6 4V12z" fill="currentColor" opacity="0.6"/>
      </svg>
    ),
    title: 'Social Media Content',
    description: 'Platform-optimized content for Reels, Shorts, TikTok, and IG — designed to stop the scroll and drive engagement.',
    gradient: 'purple',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M6 26V10l10-6 10 6v16H6z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M16 14v8M12 18h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Promotional Content',
    description: 'High-impact ads, brand films, and product showcases that communicate your message with cinematic quality.',
    gradient: 'gold',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="3" y="3" width="26" height="26" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 16l4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Poster Designing',
    description: 'Eye-catching posters, thumbnails, social media graphics, and print-ready designs that communicate your message visually.',
    gradient: 'pink',
  },
]

const GRADIENT_MAP = {
  cyan: 'var(--gradient-primary)',
  purple: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
  gold: 'linear-gradient(135deg, #f59e0b, #ef4444)',
  pink: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
}

export default function ServicesSection() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">What I Do</span>
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle">
            From raw footage to polished masterpiece — I bring your vision to life.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((service, index) => (
            <div key={service.title} className="reveal" style={{ animationDelay: `${index * 0.1}s` }}>
              <BorderGlow className="service-card">
                <div
                  className="service-icon"
                  style={{ background: GRADIENT_MAP[service.gradient] }}
                >
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </BorderGlow>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

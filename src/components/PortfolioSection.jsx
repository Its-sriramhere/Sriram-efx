import { useState, useMemo } from 'react'
import TiltedCard from './TiltedCard'
import './PortfolioSection.css'

const CATEGORIES = ['All', 'Reels', 'Commercial Ads', 'Corporate', 'Event', 'Poster Designing']

const PROJECTS = [
  {
    title: 'Brand Film — Lumin',
    category: 'Commercial Ads',
    gradient: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
  },
  {
    title: 'Tech Reel Compilation',
    category: 'Reels',
    gradient: 'linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)',
  },
  {
    title: 'Corporate Annual Meet',
    category: 'Corporate',
    gradient: 'linear-gradient(135deg, #232526, #414345)',
  },
  {
    title: 'Wedding Highlights',
    category: 'Event',
    gradient: 'linear-gradient(135deg, #2d1b69, #55286f, #7b2d8e)',
  },
  {
    title: 'Product Launch — Nova',
    category: 'Commercial Ads',
    gradient: 'linear-gradient(135deg, #0d0d0d, #1a1a2e)',
  },
  {
    title: 'Poster Series — Abstract',
    category: 'Poster Designing',
    gradient: 'linear-gradient(135deg, #000428, #004e92)',
  },
  {
    title: 'Fitness Ad Campaign',
    category: 'Reels',
    gradient: 'linear-gradient(135deg, #1f1c2c, #928dab)',
  },
  {
    title: 'Documentary Short',
    category: 'Corporate',
    gradient: 'linear-gradient(135deg, #0d0d0d, #3a3a3a)',
  },
  {
    title: 'Festival Posters',
    category: 'Poster Designing',
    gradient: 'linear-gradient(135deg, #0a0a0a, #3a1c71, #d76d77)',
  },
]

function gradientToDataUri(gradient) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="280">
    <defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      ${gradient
        .replace('linear-gradient(135deg, ', '')
        .replace(')', '')
        .split(',')
        .map((c, i) => `<stop offset="${i * 50}%" stop-color="${c.trim()}"/>`)
        .join('')}
    </linearGradient></defs>
    <rect width="400" height="280" fill="url(#g)"/>
  </svg>`
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = useMemo(
    () =>
      activeCategory === 'All'
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === activeCategory),
    [activeCategory]
  )

  return (
    <section id="portfolio" className="section portfolio">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">My Work</span>
          <h2 className="section-title">Portfolio</h2>
          <p className="section-subtitle">
            A curated selection of projects showcasing my editing and design work.
          </p>
        </div>

        <div className="portfolio-filters reveal">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`filter-btn cursor-target ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div key={activeCategory} className="portfolio-grid">
          {filteredProjects.map((project, index) => (
            <div key={project.title} className="reveal" style={{ animationDelay: `${index * 0.08}s` }}>
              <TiltedCard
                imageSrc={gradientToDataUri(project.gradient)}
                altText={project.title}
                containerHeight="280px"
                containerWidth="100%"
                imageHeight="280px"
                imageWidth="400px"
                rotateAmplitude={12}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent
                overlayContent={
                  <div className="portfolio-overlay-content">
                    <span className="portfolio-overlay-category">{project.category}</span>
                    <h3 className="portfolio-overlay-title">{project.title}</h3>
                    <span className="portfolio-overlay-action">View Project →</span>
                  </div>
                }
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

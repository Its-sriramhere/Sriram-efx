import { useState, useMemo } from 'react'
import CircularGallery from './CircularGallery'
import './PortfolioSection.css'

const CATEGORIES = ['All', 'Reels', 'Commercial Ads', 'Event Promotion']

const PROJECTS = [
  { key: 'highlight-reel', title: 'Highlight Reel', category: 'Reels', image: '/thumbnails/OAOZ1135.jpg' },
  { key: 'reel-compilation', title: 'Reel Compilation', category: 'Reels', image: '/thumbnails/JTVF2442.jpg' },
  { key: 'event-reel', title: 'Event Reel', category: 'Reels', image: '/thumbnails/LBGT2910.jpg' },
  { key: 'product-launch', title: 'Product Launch — Nova', category: 'Reels', image: '/thumbnails/PIAP0680.jpg' },
  { key: 'social-content', title: 'Social Content Reel', category: 'Reels', image: '/thumbnails/RTAM6777.jpg' },
  { key: 'cinematic-reel', title: 'Cinematic Reel', category: 'Reels', image: '/thumbnails/NZLU9756.jpg' },
  { key: 'doc-short', title: 'Documentary Short', category: 'Reels', image: '/thumbnails/UTGF7047.jpg' },
  { key: 'img-6578', category: 'Reels', image: '/thumbnails/img-6578.jpg' },
  { key: 'img-6982', category: 'Reels', image: '/thumbnails/img-6982.jpg' },
  { key: 'img-9373', category: 'Reels', image: '/thumbnails/img-9373.jpg' },
  { key: 'img-9434', category: 'Reels', image: '/thumbnails/img-9434.jpg' },
  { key: 'brand-film-aura', title: 'Brand Film — Aura', category: 'Commercial Ads', image: '/thumbnails/img-6511.jpg' },
  { key: 'brand-film-lumin', title: 'Brand Film — Lumin', category: 'Commercial Ads', image: '/thumbnails/img-9680.jpg' },
  { key: 'event-promotion', title: 'Event Promotion', category: 'Event Promotion', image: '/thumbnails/img-6523.jpg' },
]

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('All')

  const galleryItems = useMemo(() => {
    const filtered = activeCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter(p => p.category === activeCategory)
    return filtered.map(p => ({
      image: p.image,
      text: p.title || '',
    }))
  }, [activeCategory])

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

        <div key={activeCategory} className="portfolio-gallery-wrap reveal">
          <div style={{ height: '600px', position: 'relative' }}>
            <CircularGallery
              items={galleryItems}
              bend={1}
              textColor="#ffffff"
              borderRadius={0.05}
              scrollEase={0.05}
              font="bold 30px Space Grotesk"
              scrollSpeed={2}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

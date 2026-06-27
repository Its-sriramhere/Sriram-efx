import { useState, useMemo } from 'react'
import VideoTiltCard from './VideoTiltCard'
import CircularGallery from './CircularGallery'
import './PortfolioSection.css'

const CATEGORIES = ['All', 'Reels', 'Commercial Ads', 'Event Promotion']

const PROJECTS = [
  { key: 'highlight-reel', title: 'Highlight Reel', category: 'Reels', video: '/videos/OAOZ1135.mp4', poster: '/thumbnails/OAOZ1135.jpg' },
  { key: 'reel-compilation', title: 'Reel Compilation', category: 'Reels', video: '/videos/JTVF2442.mp4', poster: '/thumbnails/JTVF2442.jpg' },
  { key: 'event-reel', title: 'Event Reel', category: 'Reels', video: '/videos/LBGT2910.mp4', poster: '/thumbnails/LBGT2910.jpg' },
  { key: 'product-launch', title: 'Product Launch — Nova', category: 'Reels', video: '/videos/PIAP0680.mp4', poster: '/thumbnails/PIAP0680.jpg' },
  { key: 'social-content', title: 'Social Content Reel', category: 'Reels', video: '/videos/RTAM6777.mp4', poster: '/thumbnails/RTAM6777.jpg' },
  { key: 'cinematic-reel', title: 'Cinematic Reel', category: 'Reels', video: '/videos/NZLU9756.mp4', poster: '/thumbnails/NZLU9756.jpg' },
  { key: 'doc-short', title: 'Documentary Short', category: 'Reels', video: '/videos/UTGF7047.mp4', poster: '/thumbnails/UTGF7047.jpg' },
  { key: 'img-6578', category: 'Reels', video: '/videos/img-6578.mp4', poster: '/thumbnails/img-6578.jpg' },
  { key: 'img-6982', category: 'Reels', video: '/videos/img-6982.mp4', poster: '/thumbnails/img-6982.jpg' },
  { key: 'img-9373', category: 'Reels', video: '/videos/img-9373.mp4', poster: '/thumbnails/img-9373.jpg' },
  { key: 'img-9434', category: 'Reels', video: '/videos/img-9434.mp4', poster: '/thumbnails/img-9434.jpg' },
  { key: 'brand-film-aura', title: 'Brand Film — Aura', category: 'Commercial Ads', video: '/videos/img-6511.mp4', poster: '/thumbnails/img-6511.jpg' },
  { key: 'brand-film-lumin', title: 'Brand Film — Lumin', category: 'Commercial Ads', video: '/videos/img-9680.mp4', poster: '/thumbnails/img-9680.jpg' },
  { key: 'event-promotion', title: 'Event Promotion', category: 'Event Promotion', video: '/videos/img-6523.mp4', poster: '/thumbnails/img-6523.jpg' },
]

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('All')

  const galleryItems = useMemo(() => {
    const filtered = PROJECTS.filter(p => p.category === activeCategory)
    return filtered.map(p => ({
      image: p.poster,
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

        {activeCategory === 'All' ? (
          <div className="portfolio-grid">
            {PROJECTS.map((project, index) => (
              <div key={project.key}>
                <VideoTiltCard
                  videoSrc={project.video}
                  posterSrc={project.poster}
                  altText={project.title || project.key}
                  containerHeight="260px"
                  containerWidth="100%"
                  imageHeight="260px"
                  imageWidth="100%"
                  rotateAmplitude={10}
                  scaleOnHover={1.03}
                  showMobileWarning={false}
                  showTooltip={false}
                  displayOverlayContent
                  overlayContent={
                    <div className="portfolio-overlay-content">
                      <span className="portfolio-overlay-category">{project.category}</span>
                      <h3 className="portfolio-overlay-title">{project.title || project.key}</h3>
                    </div>
                  }
                />
              </div>
            ))}
          </div>
        ) : (
          <div key={activeCategory} className="portfolio-gallery-wrap">
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
        )}
      </div>
    </section>
  )
}

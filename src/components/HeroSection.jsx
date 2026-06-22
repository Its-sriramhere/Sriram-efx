import { useMemo } from 'react'
import Hyperspeed from './Hyperspeed'
import { hyperspeedPresets } from './hyperspeedPresets'
import TiltedCard from './TiltedCard'
import './HeroSection.css'

export default function HeroSection() {
  const titleWords = useMemo(() => ['Video', 'Editor', 'Poster', 'Designer'], [])

  return (
    <section id="hero" className="hero">
      <Hyperspeed effectOptions={hyperspeedPresets.one} />
      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot" />
          Available for Freelance Work
        </div>

        <div className="hero-profile">
          <TiltedCard
            imageSrc="/profile.png"
            altText="Sriram Sundaram"
            containerHeight="140px"
            containerWidth="140px"
            imageHeight="140px"
            imageWidth="140px"
            rotateAmplitude={8}
            scaleOnHover={1.08}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent
            overlayContent={
              <div className="hero-profile-label">Sriram-efx</div>
            }
          />
        </div>

        <h1 className="hero-title">
          Sriram
          <br />
          <span className="hero-surname gradient-text">Sundaram</span>
        </h1>

        <div className="hero-words">
          {titleWords.map((word, i) => (
            <span key={word} className="hero-word" style={{ animationDelay: `${i * 0.15}s` }}>
              {word}
              {i < titleWords.length - 1 && <span className="hero-word-sep">•</span>}
            </span>
          ))}
        </div>

        <p className="hero-description">
          Crafting compelling visual stories through video editing, poster designing,
          and UI/UX design. Turning ideas into immersive experiences.
        </p>

        <div className="hero-actions">
          <a href="#portfolio" className="btn btn-primary cursor-target">
            View Work
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 3v10M5 10l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#contact" className="btn btn-outline cursor-target">
            Hire Me
          </a>
          <a href="/Resume.pdf" download className="btn btn-outline cursor-target">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2v8M5 7l3 3 3-3M3 12v1a1 1 0 001 1h8a1 1 0 001-1v-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Download CV
          </a>
        </div>

        <div className="hero-scroll">
          <span className="hero-scroll-text">Scroll</span>
          <div className="hero-scroll-line" />
        </div>
      </div>
    </section>
  )
}

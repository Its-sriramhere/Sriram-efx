import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TargetCursor from './components/TargetCursor'
import GooeyNav from './components/GooeyNav'
import Hyperspeed from './components/Hyperspeed'
import { hyperspeedPresets } from './components/hyperspeedPresets'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import PortfolioSection from './components/PortfolioSection'
import ProcessSection from './components/ProcessSection'
import StatsSection from './components/StatsSection'
import TestimonialsSection from './components/TestimonialsSection'
import SkillsSection from './components/SkillsSection'
import ContactSection from './components/ContactSection'
import ExperienceSection from './components/ExperienceSection'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import WelcomeOverlay from './components/WelcomeOverlay'
import Footer from './components/Footer'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const appRef = useRef(null)

  useEffect(() => {
    const reveals = gsap.utils.toArray('.reveal')
    reveals.forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, y: 40, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      )
    })

    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return (
    <div className="app" ref={appRef}>
      <WelcomeOverlay />
      <Hyperspeed effectOptions={hyperspeedPresets.one} />
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
        cursorColor="#ffffff"
        cursorColorOnTarget="#B497CF"
      />
      <GooeyNav />
      <FloatingWhatsApp />
      <main className="app-main">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <StatsSection />
        <ProcessSection />
        <TestimonialsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App

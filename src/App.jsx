import { useEffect } from 'react'
import TargetCursor from './components/TargetCursor'
import GooeyNav from './components/GooeyNav'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import PortfolioSection from './components/PortfolioSection'
import ProcessSection from './components/ProcessSection'
import StatsSection from './components/StatsSection'
import TestimonialsSection from './components/TestimonialsSection'
import SkillsSection from './components/SkillsSection'
import ContactSection from './components/ContactSection'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import WelcomeOverlay from './components/WelcomeOverlay'
import Footer from './components/Footer'
import './App.css'

function App() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    revealElements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="app">
      <WelcomeOverlay />
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
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App

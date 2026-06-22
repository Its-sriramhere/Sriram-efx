import { useState, useEffect } from 'react'
import './WelcomeOverlay.css'

export default function WelcomeOverlay() {
  const [phase, setPhase] = useState('enter')

  useEffect(() => {
    const enterTimer = setTimeout(() => setPhase('hold'), 1500)
    const holdTimer = setTimeout(() => setPhase('exit'), 4500)
    const removeTimer = setTimeout(() => setPhase('gone'), 6000)

    return () => {
      clearTimeout(enterTimer)
      clearTimeout(holdTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  if (phase === 'gone') return null

  return (
    <div className={`welcome-overlay ${phase}`}>
      <div className="welcome-content">
        <h1 className="welcome-title">
          Welcome to the world of
          <br />
          <span className="welcome-brand">efx</span>
        </h1>
      </div>
    </div>
  )
}

import { useCountUp } from '../hooks/useCountUp'
import './StatsSection.css'

function StatItem({ end, suffix = '+', label }) {
  const { count, ref } = useCountUp(end, 2000)

  return (
    <div className="stat-item" ref={ref}>
      <span className="stat-number">
        {count}
        <span className="stat-suffix">{suffix}</span>
      </span>
      <span className="stat-label">{label}</span>
    </div>
  )
}

export default function StatsSection() {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid reveal">
          <StatItem end={100} suffix="+" label="Videos Edited" />
          <StatItem end={50} suffix="+" label="Happy Clients" />
          <StatItem end={5} suffix="M+" label="Total Views" />
          <StatItem end={3} suffix="+" label="Years Experience" />
        </div>
      </div>
    </section>
  )
}

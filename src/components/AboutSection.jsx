import ComparisonSlider from './ComparisonSlider'
import './AboutSection.css'

const QUALITIES = [
  'ECE Student at Dr.N.G.P Institute of Technology',
  'Professional Video Editor',
  'UI/UX Designer',
  'Poster Designer',
]

export default function AboutSection() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content reveal">
            <span className="section-label">About Me</span>
            <h2 className="section-title">
              Turning Vision
              <br />
              Into Visuals
            </h2>
            <p className="about-description">
              I'm Sriram Sundaram — a video editor, UI/UX designer, and poster designing
              creator with a passion for storytelling. Currently pursuing ECE at Dr.N.G.P Institute of
              Technology, I bring a unique blend of technical precision and creative vision
              to every project.
            </p>
            <ul className="about-list">
              {QUALITIES.map((item) => (
                <li key={item} className="about-list-item">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 8l3 3 5-6" stroke="#00f0ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="about-visual reveal">
            <ComparisonSlider
              beforeSrc="/images/img-before.png"
              afterSrc="/images/img-after.png"
              beforeLabel="Raw"
              afterLabel="Final"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

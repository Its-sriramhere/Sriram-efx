import './ExperienceSection.css'

const EXPERIENCES = [
  {
    role: 'Video Editor & Content Creator',
    organization: 'Student Development Council — Dr.N.G.P. Institute of Technology',
    period: '2025 – Present',
    location: 'Coimbatore, Tamil Nadu',
    points: [
      'Official editor for SDC, managing video content and visual communication for the institution',
      'Produced reels using CapCut reaching 100K+ views on Instagram',
      'Designed promotional graphics, posters, and digital assets for college events and campaigns',
      'Managed end-to-end post-production: editing, effects, transitions, subtitles, and publishing',
    ],
  },
  {
    role: 'Video Creator & Video Editor',
    organization: 'Kanam\'26',
    period: '2026',
    location: 'Coimbatore, Tamil Nadu',
    points: [
      'Produced engaging promotional and highlight videos with effective transitions and visual effects',
      'Managed complete editing workflow from raw footage to final output',
      'Collaborated with event team to ensure timely delivery of high-quality media',
    ],
  },
  {
    role: 'Director & Video Editor',
    organization: 'Short Film — Cancer Awareness (with KMCH)',
    period: '2025',
    location: 'Coimbatore, Tamil Nadu',
    points: [
      'Directed and edited a cancer awareness short film in collaboration with KMCH',
      'Oversaw complete creative process from concept development to final production',
      'Executed end-to-end video editing with storytelling techniques and visual effects',
    ],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Experience</span>
          <h2 className="section-title">Where I've Worked</h2>
          <p className="section-subtitle">
            My journey in video editing, content creation, and visual storytelling.
          </p>
        </div>

        <div className="experience-timeline">
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="experience-card reveal">
              <div className="experience-marker" />
              <div className="experience-content">
                <div className="experience-head">
                  <h3 className="experience-role">{exp.role}</h3>
                  <span className="experience-period">{exp.period}</span>
                </div>
                <p className="experience-org">{exp.organization}</p>
                <p className="experience-location">{exp.location}</p>
                <ul className="experience-points">
                  {exp.points.map((point, i) => (
                    <li key={i} className="experience-point">{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

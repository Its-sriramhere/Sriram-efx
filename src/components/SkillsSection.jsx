import Antigravity from './Antigravity'
import './SkillsSection.css'

const SKILLS = [
  { name: 'Premiere Pro', icon: 'Pr', gradient: 'linear-gradient(135deg, #9999ff, #6666cc)' },
  { name: 'After Effects', icon: 'Ae', gradient: 'linear-gradient(135deg, #d47fff, #9955cc)' },
  { name: 'Photoshop', icon: 'Ps', gradient: 'linear-gradient(135deg, #66ccff, #3399cc)' },
  { name: 'DaVinci Resolve', icon: 'Dr', gradient: 'linear-gradient(135deg, #ffaa66, #cc7722)' },
  { name: 'CapCut', icon: 'Cc', gradient: 'linear-gradient(135deg, #ff6688, #cc3355)' },
  { name: 'Figma', icon: 'Fg', gradient: 'linear-gradient(135deg, #ff66cc, #cc3399)' },
  { name: 'Blender', icon: 'Bl', gradient: 'linear-gradient(135deg, #ff9933, #cc6600)' },
  { name: 'Audition', icon: 'Au', gradient: 'linear-gradient(135deg, #66ff99, #33cc66)' },
]

export default function SkillsSection() {
  return (
    <section className="section skills">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Tools & Skills</span>
          <h2 className="section-title">Software I Use</h2>
          <p className="section-subtitle">
            Industry-standard tools for professional-grade results.
          </p>
        </div>

        <div className="skills-container reveal">
          <Antigravity>
            {SKILLS.map((skill) => (
              <div key={skill.name} className="antigravity-item skill-badge">
                <div className="skill-icon" style={{ background: skill.gradient }}>
                  {skill.icon}
                </div>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </Antigravity>
        </div>
      </div>
    </section>
  )
}

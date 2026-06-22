import './ProcessSection.css'

const STEPS = [
  { number: '01', title: 'Footage', description: 'You provide the raw素材, I handle the rest.' },
  { number: '02', title: 'Requirements', description: 'We align on vision, style, deadlines, and deliverables.' },
  { number: '03', title: 'Edit', description: 'I craft the rough cut, refine pacing, and polish color & audio.' },
  { number: '04', title: 'Review', description: 'You review, request revisions, and we iterate until perfect.' },
  { number: '05', title: 'Delivery', description: 'Final export in your required format, delivered on time.' },
]

export default function ProcessSection() {
  return (
    <section id="process" className="section process">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">How It Works</span>
          <h2 className="section-title">Editing Process</h2>
          <p className="section-subtitle">
            From raw footage to final delivery — a streamlined workflow.
          </p>
        </div>

        <div className="process-steps">
          {STEPS.map((step, index) => (
            <div key={step.number} className="process-step reveal">
              <div className="step-connector">
                <div className="step-number">{step.number}</div>
                {index < STEPS.length - 1 && <div className="step-line" />}
              </div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

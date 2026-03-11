import { useEffect, useRef } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import './Skills.css'

const skills = [
  { name: 'React / Next.js', level: 90 },
  { name: 'Python / AI/ML', level: 85 },
  { name: 'Flutter / React Native', level: 80 },
  { name: 'Node.js / Express', level: 82 },
  { name: 'TensorFlow / PyTorch', level: 75 },
  { name: 'TypeScript', level: 88 },
  { name: 'UI/UX Design', level: 78 },
  { name: 'Docker / DevOps', level: 70 },
]

export default function Skills() {
  const gridRef = useRef(null)

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          grid.querySelectorAll('.skill-fill').forEach((el) => {
            el.classList.add('animate')
          })
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(grid)
    return () => observer.disconnect()
  }, [])

  const headerRef = useScrollReveal()

  return (
    <section id="skills" className="skills">
      <div className="skills-header reveal-right" ref={headerRef}>
        <div className="section-tag skills-tag">My Expertise</div>
        <h2 className="section-title">Skills</h2>
        <p className="section-desc">Technologies and tools I work with professionally.</p>
      </div>

      <div className="skills-grid" ref={gridRef}>
        {skills.map((skill) => (
          <div className="skill-item" key={skill.name}>
            <div className="skill-header">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div
                className="skill-fill"
                style={{ '--target': `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

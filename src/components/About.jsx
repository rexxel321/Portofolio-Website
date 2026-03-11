import useScrollReveal from '../hooks/useScrollReveal'
import './About.css'

const stats = [
  { icon: '💼', number: '50+', label: 'Projects Completed' },
  { icon: '👥', number: '30+', label: 'Satisfied Clients' },
  { icon: '🏆', number: '3+', label: 'Years Of Experience' },
]

const experiences = [
  {
    num: 1,
    title: 'Full Stack Developer — Freelance',
    period: '2025 – Present',
    desc: 'Developing web and mobile applications for clients across Indonesia, integrating AI features to enhance user experience and business automation.',
  },
  {
    num: 2,
    title: 'Intership at DISKOMINFOSANTIK',
    period: '2022',
    desc: 'Built cross-platform mobile applications using Flutter & React Native. Collaborated with design and backend teams to deliver scalable solutions.',
  },
  {
    num: 3,
    title: 'Internship at ResponsAIbility',
    period: '2026 - Present',
    desc: 'Assisted in machine learning model development and data analysis projects. Gained deep expertise in Python, TensorFlow, and NLP pipelines.',
  },

  {
    num: 3,
    title: 'Head of WEB DEVELOPMENT PUSB',
    period: '2026 - Present',
    desc: 'Developing website for PUSB using React and Tailwind CSS for frontend and Golang for backend.',
  },
]

export default function About() {
  const statsRef = useScrollReveal()
  const titleRef = useScrollReveal()
  const timelineRef = useScrollReveal()

  return (
    <section id="about" className="about reveal-top" ref={titleRef}>
      <div className="section-tag">About Me</div>
      <h2 className="section-title">Who Am I?</h2>
      <p className="section-desc">
        I'm a passionate developer specializing in AI integration, web development,
        and mobile applications. With a strong foundation in modern technologies,
        I create innovative solutions that bridge the gap between artificial
        intelligence and user experience.
      </p>

      <div className="stats-grid reveal-top" ref={statsRef}>
        {stats.map((s, i) => (
          <div className={`stat-card ${i === 2 ? 'stat-card--accent' : ''}`} key={s.label}>
            <div className="stat-icon">{s.icon}</div>
            <div className="stat-number">{s.number}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      <h3 className="work-title reveal-top" ref={titleRef}> Experience</h3>
      <div className="timeline reveal-top" ref={timelineRef}>
        {experiences.map((exp) => (
          <div className="timeline-item" key={exp.num}>
            <div className="timeline-num">{exp.num}</div>
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <span>{exp.period}</span>
              <p>{exp.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

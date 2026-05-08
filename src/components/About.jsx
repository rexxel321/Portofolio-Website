import { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import './About.css'

import expFreelance from '../assets/exp_freelance.png'
import expDiskominfo from '../assets/exp_diskominfo.png'
import expAI from '../assets/exp_ai.png'
import expPUSB from '../assets/exp_pusb.png'

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
    photos: [
      {
        img: expFreelance,
        caption: 'Working on a client\'s full-stack web project',
      },
      {
        img: expFreelance,
        caption: 'Integrating AI API into e-commerce platform',
      },
      {
        img: expFreelance,
        caption: 'Client presentation and project handover session',
      },
    ],
  },
  {
    num: 2,
    title: 'Internship at DISKOMINFOSANTIK',
    period: '2022',
    desc: 'Built cross-platform mobile applications using Flutter & React Native. Collaborated with design and backend teams to deliver scalable solutions.',
    photos: [
      {
        img: expDiskominfo,
        caption: 'Presenting mobile app prototype to the team',
      },
      {
        img: expDiskominfo,
        caption: 'Collaborating with backend developers on API integration',
      },
      {
        img: expDiskominfo,
        caption: 'User testing session at DISKOMINFOSANTIK office',
      },
    ],
  },
  {
    num: 3,
    title: 'Internship at ResponsAIbility',
    period: '2026 - Present',
    desc: 'Assisted in machine learning model development and data analysis projects. Gained deep expertise in Python, TensorFlow, and NLP pipelines.',
    photos: [
      {
        img: expAI,
        caption: 'Team discussion on NLP model architecture',
      },
      {
        img: expAI,
        caption: 'Data analysis and visualization with the AI team',
      },
      {
        img: expAI,
        caption: 'Model evaluation and results presentation',
      },
    ],
  },
  {
    num: 4,
    title: 'Head of WEB DEVELOPMENT PUSB',
    period: '2026 - Present',
    desc: 'Developing website for PUSB using React and Tailwind CSS for frontend and Golang for backend.',
    photos: [
      {
        img: expPUSB,
        caption: 'Leading the web development team meeting',
      },
      {
        img: expPUSB,
        caption: 'UI/UX design review and sprint planning session',
      },
      {
        img: expPUSB,
        caption: 'Deploying the new PUSB website to production',
      },
    ],
  },
]

function ExperienceItem({ exp }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`timeline-item ${open ? 'timeline-item--open' : ''}`}>
      <div className="timeline-num">{exp.num}</div>
      <div className="timeline-content">
        <div className="timeline-header" onClick={() => setOpen(!open)}>
          <div className="timeline-header-text">
            <h3>{exp.title}</h3>
            <span>{exp.period}</span>
            <p>{exp.desc}</p>
          </div>
          <button
            className={`timeline-toggle ${open ? 'timeline-toggle--active' : ''}`}
            aria-label="Toggle photos"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>

        <div className={`timeline-gallery ${open ? 'timeline-gallery--open' : ''}`}>
          <div className="timeline-gallery-label">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
            Activity Photos
          </div>
          <div className="timeline-photos">
            {exp.photos.map((photo, idx) => (
              <div className="timeline-photo-card" key={idx}>
                <div className="timeline-photo-img-wrap">
                  <img src={photo.img} alt={photo.caption} />
                </div>
                <p className="timeline-photo-caption">{photo.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

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
          <ExperienceItem key={exp.num} exp={exp} />
        ))}
      </div>
    </section>
  )
}

import { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import aiChatbotImg from '../assets/ai chatbot.jpeg'
import volunterImg from '../assets/volunter.png'
import emotiCareImg from '../assets/EmotiCare.png'
import './Projects.css'

const projects = [
  {
    cat: 'ai',
    emoji: '🧠',
    image: aiChatbotImg,
    bg: '#fef3ec',
    tag: 'AI',
    title: 'AI Chatbot Platform',
    desc: 'Conversational AI powered by LLMs with custom fine-tuning for business use cases.',
  },
  {
    cat: 'web',
    emoji: '🌐',
    image: volunterImg,
    bg: '#eef3fe',
    tag: 'Web',
    title: 'Volunteer',
    desc: 'Building a volunteer website for humanitarian activities.',
  },
  {
    cat: 'mobile',
    emoji: '📱',
    bg: '#f0feee',
    tag: 'Mobile',
    title: 'Health Tracker App',
    desc: 'Flutter-based mobile app with AI-powered health insights and wearable integration.',
  },
  {
    cat: 'ai',
    emoji: '🔮',
    image: emotiCareImg,
    bg: '#fdf4ff',
    tag: 'AI',
    title: 'EmotiCare Image Recognition ',
    desc: 'Deeplearning project using Yolov11 for mood detection.',
  },
  {
    cat: 'web',
    emoji: '📊',
    bg: '#fff8ee',
    tag: 'Web',
    title: 'Portfolio Builder SaaS',
    desc: 'No-code platform for developers to build beautiful portfolio websites in minutes.',
  },
  {
    cat: 'mobile',
    emoji: '🎓',
    bg: '#eef9ff',
    tag: 'Mobile',
    title: 'EdTech Learning App',
    desc: 'Interactive learning platform with adaptive quizzes and progress tracking.',
  },
]

const filters = ['all', 'ai', 'web', 'mobile']

export default function Projects() {
  const [active, setActive] = useState('all')
  const gridRef = useScrollReveal()
  const headerRef = useScrollReveal()

  const visible = projects.filter((p) => active === 'all' || p.cat === active)

  return (
    <section id="projects" className="projects">
      <div className="projects-header reveal-bottom" ref={headerRef}>
        <div className="section-tag">My Work</div>
        <h2 className="section-title">Projects</h2>
        <p className="section-desc">
          A selection of projects I've built — from AI-powered tools to full-stack
          applications.
        </p>

        <div className="filter-tabs">
          {filters.map((f) => (
            <button
              key={f}
              className={`filter-tab ${active === f ? 'active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="projects-grid reveal-bottom" ref={gridRef}>
        {visible.map((p) => (
          <div className="project-card" key={p.title}>
            <div className="project-thumb" style={{ background: p.bg }}>
              {p.image ? (
                <img src={p.image} alt={p.title} className="project-img" />
              ) : (
                <span>{p.emoji}</span>
              )}
            </div>
            <div className="project-info">
              <div className="project-tag">{p.tag}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

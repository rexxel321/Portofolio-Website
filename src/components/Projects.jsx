import useScrollReveal from '../hooks/useScrollReveal'
import aiChatbotImg from '../assets/ai chatbot.jpeg'
import volunterImg from '../assets/volunter.png'
import emotiCareImg from '../assets/EmotiCare.png'
import ecommerceImg from '../assets/ecommerce(1).png'
import './Projects.css'

const projects = [
  {
    emoji: '🧠',
    image: aiChatbotImg,
    bg: '#fef3ec',
    tag: 'AI',
    title: 'AI Chatbot Platform',
    desc: 'Conversational AI powered by LLMs with custom fine-tuning for business use cases.',
  },
  {
    emoji: '🌐',
    image: volunterImg,
    bg: '#eef3fe',
    tag: 'Web',
    title: 'Volunteer',
    desc: 'Building a volunteer website for humanitarian activities.',
  },
  {
    emoji: '📱',
    image: ecommerceImg,
    bg: '#f0feee',
    tag: 'Mobile',
    title: 'E-commerce App',
    desc: 'Mobile application for e-commerce with a seamless shopping experience.',
  },
  {
    emoji: '🔮',
    image: emotiCareImg,
    bg: '#fdf4ff',
    tag: 'AI',
    title: 'EmotiCare Image Recognition ',
    desc: 'Deeplearning project using Yolov11 for mood detection.',
  },
  {
    emoji: '📊',
    bg: '#fff8ee',
    tag: 'Web',
    title: 'Portfolio Builder SaaS',
    desc: 'No-code platform for developers to build beautiful portfolio websites in minutes.',
  },
  {
    emoji: '🎓',
    bg: '#eef9ff',
    tag: 'Mobile',
    title: 'EdTech Learning App',
    desc: 'Interactive learning platform with adaptive quizzes and progress tracking.',
  },
]

export default function Projects() {
  const gridRef = useScrollReveal()
  const headerRef = useScrollReveal()

  return (
    <section id="projects" className="projects">
      <div className="projects-header reveal-bottom" ref={headerRef}>
        <div className="section-tag">My Work</div>
        <h2 className="section-title">Projects</h2>
        <p className="section-desc">
          A selection of projects I've built — from AI-powered tools to full-stack
          applications.
        </p>
      </div>

      <div className="projects-grid reveal-bottom" ref={gridRef}>
        {projects.map((p) => (
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

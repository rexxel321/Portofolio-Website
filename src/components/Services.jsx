import useScrollReveal from '../hooks/useScrollReveal'
import './Services.css'

const services = [
  {
    icon: '🤖',
    title: 'AI Integration',
    desc: 'Integrating cutting-edge AI models and APIs into web and mobile applications to automate workflows and enhance user experiences.',
    variant: '',
  },
  {
    icon: '💻',
    title: 'Web Development',
    desc: 'Building modern, responsive web applications with React, Next.js, and Node.js. Focus on performance, accessibility, and clean architecture.',
    variant: 'featured',
  },
  {
    icon: '📱',
    title: 'Mobile Development',
    desc: 'Creating cross-platform mobile apps with Flutter and React Native that deliver smooth, native-quality experiences on iOS and Android.',
    variant: 'orange',
  },
]

export default function Services() {
  const gridRef = useScrollReveal()

  return (
    <section id="services" className="services">
      <div className="section-tag">What I Do</div>
      <h2 className="section-title">Services</h2>
      <p className="section-desc">
        I offer a comprehensive range of digital services designed to bring your
        vision to life with precision and creativity.
      </p>
      <div className="services-grid reveal" ref={gridRef}>
        {services.map((s) => (
          <div className={`service-card ${s.variant ? `service-card--${s.variant}` : ''}`} key={s.title}>
            <div className="service-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

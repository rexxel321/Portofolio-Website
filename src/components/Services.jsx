import { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import certImg1 from '../assets/sertif.png'
import certImg2 from '../assets/sertif1.png'
import certImg3 from '../assets/sertif2.png'
import certImg4 from '../assets/comfor1.png'
import certImg5 from '../assets/aws.png'
import certImg6 from '../assets/puvv.png'
import './Services.css'

const certifications = [
  {
    image: certImg1,
    title: 'Belajar Dasar AI',
    issuer: 'Dicoding Indonesia',
    date: 'Jan 2026',
    credentialUrl: '#',
    variant: '',
  },
  {
    image: certImg2,
    title: 'Belajar Penerapan Data Science dengan Microsoft Fabric',
    issuer: 'Dicoding Indonesia',
    date: 'Jan 2026',
    credentialUrl: '#',
    variant: '',
  },
  {
    image: certImg3,
    title: 'Membangun Aplikasi Gen AI dengan Microsoft Azure',
    issuer: 'Dicoding Indonesia',
    date: 'Jan 2026',
    credentialUrl: '#',
    variant: '',
  },
  {
    image: certImg4,
    title: 'Communication Forum 1',
    issuer: 'Bem President Univeristy',
    date: 'Feb 2026',
    credentialUrl: '#',
    variant: '',
  },
  {
    image: certImg5,
    title: 'Machine Learning Terminology and Proces',
    issuer: 'Amazon Web Services',
    date: 'Mar 2025',
    credentialUrl: '#',
    variant: '',
  },
  {
    image: certImg6,
    title: 'President University Vocal Victory',
    issuer: 'Bem President University',
    date: 'Nov 2025',
    credentialUrl: '#',
    variant: '',
  },

]

const INITIAL_SHOW = 6

export default function Services() {
  const [showAll, setShowAll] = useState(false)
  const gridRef = useScrollReveal()
  const titleRef = useScrollReveal()

  const visible = showAll ? certifications : certifications.slice(0, INITIAL_SHOW)
  const hasMore = certifications.length > INITIAL_SHOW

  return (
    <section id="certifications" className="services">
      <div className="section-tag" ref={titleRef}>Credentials</div>
      <h2 className="section-title reveal-left" ref={titleRef}>Licence & Certification</h2>
      <p className="section-desc">
        Professional certifications and licences that validate my expertise
        across different technology domains.
      </p>

      <div className="services-grid reveal" ref={gridRef}>
        {visible.map((cert, idx) => (
          <div
            className={`service-card ${cert.variant ? `service-card--${cert.variant}` : ''}`}
            key={idx}
          >
            <div className="cert-image-wrap">
              {cert.image ? (
                <img src={cert.image} alt={cert.title} className="cert-image" />
              ) : (
                <div className="cert-placeholder">
                  <span>🏅</span>
                </div>
              )}
            </div>
            <h3>{cert.title}</h3>
            <div className="cert-meta">
              <span className="cert-issuer">{cert.issuer}</span>
              <span className="cert-date">{cert.date}</span>
            </div>
            <a
              href={cert.credentialUrl}
              className="cert-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Show Credential →
            </a>
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="cert-toggle-wrap">
          <button
            className={`cert-toggle-btn ${showAll ? 'cert-toggle-btn--open' : ''}`}
            onClick={() => setShowAll(!showAll)}
          >
            <span className="cert-toggle-inner">
              <span className="cert-toggle-text">
                {showAll ? 'Show Less' : 'Show More'}
              </span>
            </span>
            <span className="cert-toggle-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </span>
          </button>
        </div>
      )}
    </section>
  )
}

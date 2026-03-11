import useScrollReveal from '../hooks/useScrollReveal'
import dhiyaPhoto from '../assets/dhiya-photo.png'
import './Hero.css'

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/rexxel321',
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .3C5.4.3 0 5.7 0 12.3c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17 4.5 18 4.8 18 4.8c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6C20.6 22.1 24 17.6 24 12.3 24 5.7 18.6.3 12 .3z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/muhammaddhiyaulhaq-/',
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.4 2H3.6C2.7 2 2 2.7 2 3.6v16.8c0 .9.7 1.6 1.6 1.6h16.8c.9 0 1.6-.7 1.6-1.6V3.6C22 2.7 21.3 2 20.4 2zM8.3 19H5.6V9.9h2.7V19zm-1.4-10.3c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6 1.6.7 1.6 1.6-.7 1.6-1.6 1.6zM19 19h-2.7v-4.6c0-1.1 0-2.5-1.5-2.5s-1.8 1.2-1.8 2.5V19h-2.7V9.9H13v1.2h.1c.4-.7 1.3-1.5 2.7-1.5 2.9 0 3.4 1.9 3.4 4.3V19z" />
      </svg>
    ),
  },

  {
    label: 'Instagram',
    href: 'https://www.instagram.com/muhammaddhiya._?igsh=aWtybWVwOTY1OHd5',
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.2c3.2 0 3.6 0 4.9.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8 0 3.2 0 3.6-.1 4.8-.1 3.2-1.6 4.8-4.9 4.9-1.3.1-1.6.1-4.9.1-3.2 0-3.6 0-4.8-.1-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.3 2.2 12c0-3.2 0-3.6.1-4.8C2.4 3.9 3.9 2.3 7.2 2.3 8.4 2.2 8.8 2.2 12 2.2zm0-2.2C8.7 0 8.3 0 7.1.1 2.7.3.3 2.7.1 7.1 0 8.3 0 8.7 0 12s0 3.7.1 4.9C.3 21.3 2.7 23.7 7.1 23.9 8.3 24 8.7 24 12 24s3.7 0 4.9-.1c4.4-.2 6.8-2.6 7-7 .1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9C23.7 2.7 21.3.3 16.9.1 15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.8a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z" />
      </svg>
    ),
  },
]

export default function Hero() {
  const leftRef = useScrollReveal()
  const rightRef = useScrollReveal()

  return (
    <section id="home" className="hero">
      {/* LEFT */}
      <div className="hero-left reveal-left" ref={leftRef}>
        <div className="section-tag">AI Enthusiast | Web &amp; Mobile Developer</div>
        <h1>
          Hello! I'm{' '}
          <span className="hero-name">
            Muhammad
            <br />
            Dhiya Ulhaq
          </span>
        </h1>
        <p>
          Transforming ideas into intelligent digital solutions with
          cutting-edge technology
        </p>
        <div className="hero-btns">
          <a href="#contact" className="btn-primary">Let's Talk →</a>
          <a href="#projects" className="btn-outline">View Projects →</a>
        </div>
        <div className="social-label">Check Out My</div>
        <div className="social-icons">
          {socialLinks.map((s) => (
            <a key={s.label} href={s.href} title={s.label}>
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* RIGHT - Photo + Geometric Shapes */}
      <div className="hero-right reveal-right" ref={rightRef}>
        {/* Cross shape */}
        <div className="geo-cross">
          <div className="bar-h" />
          <div className="bar-v" />
        </div>
        {/* Corner decorations */}
        <div className="geo-corner geo-corner--tl" />
        <div className="geo-corner geo-corner--br" />
        {/* Circle */}
        <div className="geo-circle" />
        {/* Bottom rect */}
        <div className="geo-rect" />

        {/* Photo */}
        <div className="hero-photo-wrap">
          <img
            src={dhiyaPhoto}
            alt="Muhammad Dhiya Ulhaq"
            className="hero-photo"
          />
        </div>
      </div>
    </section>
  )
}

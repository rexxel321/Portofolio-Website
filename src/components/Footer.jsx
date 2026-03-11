import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import './Footer.css'

const navLinks = ['Home', 'About', 'Services', 'Projects', 'Contact']

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand & Socials Column */}
        <div className="footer-col brand-col">
          <div className="logo">Dhiya<span>.</span></div>
          <p className="footer-bio">
            Transforming ideas into intelligent digital solutions with cutting-edge technology. Let's build the future together.
          </p>
          <div className="social-links">
            <a href="https://github.com/muhammaddhiyaulhaq" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://linkedin.com/in/muhammaddhiyaulhaq" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <nav className="footer-nav">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`}>{link}</a>
            ))}
          </nav>
        </div>

        {/* Contact Column */}
        <div className="footer-col contact-col">
          <h4>Get in Touch</h4>
          <div className="footer-contact-item">
            <FaEnvelope className="contact-icon" />
            <a href="mailto:muhammaddhiyaulhaq1508@gmail.com">muhammaddhiyaulhaq1508@gmail.com</a>
          </div>
          <div className="footer-contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span>Indonesia</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Muhammad Dhiya Ulhaq. All rights reserved.</p>
      </div>
    </footer>
  )
}

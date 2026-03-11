import React from 'react'
import './Home.css'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section id="home" className="hero reveal">
        <div className="container">
          <h1>Halo, saya Dhiya</h1>
          <p className="subtitle">Frontend Developer | UI/UX Enthusiast</p>
          <p>Membangun web experience yang indah dan interaktif.</p>
          <button className="btn btn-primary">Lihat Portfolio</button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about reveal">
        <div className="container">
          <h2>Tentang Saya</h2>
          <p>Saya adalah seorang frontend developer dengan passion di React, modern web design, dan user experience.</p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services reveal">
        <div className="container">
          <h2>Layanan</h2>
          <div className="service-grid">
            <div className="card reveal-left">
              <h3>Web Development</h3>
              <p>Membuat website modern dengan React, Vite, dan teknologi terkini.</p>
            </div>
            <div className="card reveal">
              <h3>UI/UX Design</h3>
              <p>Desain interface yang user-friendly dan visually appealing.</p>
            </div>
            <div className="card reveal-right">
              <h3>Performance</h3>
              <p>Optimasi dan tuning untuk web yang cepat dan efisien.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills reveal">
        <div className="container">
          <h2>Skills</h2>
          <div className="skill-group">
            <div className="skill reveal-left">
              <h4>Frontend</h4>
              <p>React, Vue, JavaScript, TypeScript, CSS3</p>
            </div>
            <div className="skill reveal">
              <h4>Tools</h4>
              <p>Git, Figma, Webpack, Vite, VS Code</p>
            </div>
            <div className="skill reveal-right">
              <h4>Backend</h4>
              <p>Node.js, Express, MongoDB, Firebase</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects reveal">
        <div className="container">
          <h2>Proyek Terbaru</h2>
          <p>Koleksi project yang telah saya kerjakan</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact reveal">
        <div className="container">
          <h2>Hubungi Saya</h2>
          <p>Tertarik untuk bekerja sama? Jangan ragu untuk menghubungi!</p>
        </div>
      </section>
    </main>
  )
}

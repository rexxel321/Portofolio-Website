import { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import './Contact.css'

export default function Contact() {
  const [toast, setToast] = useState(false)
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', message: '' })
  const infoRef = useScrollReveal()
  const formRef = useScrollReveal()

  const handleSubmit = (e) => {
    e.preventDefault()

    // Construct the WhatsApp message
    const phoneNumber = '6289694109330'
    const textMessage = `Hello Dhiya,\n\nI am reaching out from your portfolio website.\n\n*Name:* ${form.firstName} ${form.lastName}\n*Email:* ${form.email}\n\n*Message:*\n${form.message}`

    // Encode the text message for URL
    const encodedMessage = encodeURIComponent(textMessage)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank')

    // Show success toast and clear form
    setToast(true)
    setForm({ firstName: '', lastName: '', email: '', message: '' })
    setTimeout(() => setToast(false), 3500)
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-grid">
        {/* Info */}
        <div className="contact-info reveal-left" ref={infoRef}>
          <div className="section-tag">Get In Touch</div>
          <h2 className="section-title">Let's Work Together</h2>
          <p>
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's create something amazing together.
          </p>
        </div>

        {/* Form */}
        <form className="contact-form reveal-right" ref={formRef} onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                placeholder=""
                value={form.firstName}
                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                placeholder=""
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder=""
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              rows={5}
              placeholder="Tell me about your project..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
          </div>
          <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
            Send Message →
          </button>
        </form>
      </div>

      {/* Toast */}
      <div className={`toast ${toast ? 'show' : ''}`}>
        ✅ Message sent! I'll get back to you soon.
      </div>
    </section>
  )
}

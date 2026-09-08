import React, { useState } from "react";
import WhatsAppIcon from "../../components/WhatsAppIcon.jsx";
import "./Contact.css";

// API endpoint is configured in the root .env file.
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/contact";

const initialState = { name: "", email: "", phone: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "loading", message: "" });

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({ state: "success", message: "Thanks! Your message has been sent — we'll get back to you soon." });
        setForm(initialState);
      } else {
        setStatus({ state: "error", message: data.error || "Something went wrong. Please try again." });
      }
    } catch (err) {
      setStatus({ state: "error", message: "Could not reach the server. Please try again later." });
    }
  };

  return (
    <>
      <section className="section section-first">
        <div className="container contact-grid">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <div className="row">
              <div className="ic">📍</div>
              <div>Hill Farms Estate, Kotagiri, Tamil Nadu, India</div>
            </div>
            <div className="row">
              <div className="ic">📞</div>
              <div>+91 98765 43210</div>
            </div>
            <div className="row">
              <div className="ic">✉️</div>
              <div>info@masfruits.com</div>
            </div>
            <div className="row">
              <div className="ic">🕐</div>
              <div>Mon – Sat: 8:00 AM – 6:00 PM</div>
            </div>
            <a
              href="https://wa.me/918015010397"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
              style={{ marginTop: 10 }}
            >
              <WhatsAppIcon size={18} /> Chat on WhatsApp
            </a>
          </div>

          <div className="form-box">
            <h3 style={{ fontFamily: "var(--font-head)", color: "var(--dark-green)", marginBottom: 20 }}>
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="field">
                  <label>Full Name</label>
                  <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Your name" />
                </div>
                <div className="field">
                  <label>Email</label>
                  <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="you@example.com" />
                </div>
              </div>
              <div className="form-row">
                <div className="field">
                  <label>Phone</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Optional" />
                </div>
                <div className="field">
                  <label>Subject</label>
                  <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="Order enquiry, etc." />
                </div>
              </div>
              <div className="field">
                <label>Message</label>
                <textarea name="message" required value={form.message} onChange={handleChange} placeholder="How can we help?" />
              </div>
              <button type="submit" className="btn btn-primary" disabled={status.state === "loading"}>
                {status.state === "loading" ? "Sending..." : "Send Message →"}
              </button>

              {status.state === "success" && <div className="form-msg success">{status.message}</div>}
              {status.state === "error" && <div className="form-msg error">{status.message}</div>}
            </form>
          </div>
        </div>

        <div className="container">
          <div className="map-box">
            <iframe
              title="MAS Fruits location — Chennai, Tamil Nadu"
              src="https://www.google.com/maps?q=T%2FF-90,+Anna+Fruit+Market,%20Chennai+-+600092&output=embed"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}

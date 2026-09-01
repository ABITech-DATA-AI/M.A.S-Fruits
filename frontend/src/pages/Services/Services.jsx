import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

// 6 services, laid out 3-per-row across 2 rows (see .services-grid in
// Services.css). Add/edit an entry here to change what's shown.
const services = [
  {
    icon: "🚚",
    title: "Farm-Fresh Delivery",
    text: "Bananas harvested and dispatched fast so freshness reaches your door within hours, not days.",
  },
  {
    icon: "📦",
    title: "Bulk & Wholesale Supply",
    text: "Reliable, large-volume supply for retailers, hotels, and distributors at competitive farm-direct pricing.",
  },
  {
    icon: "🌍",
    title: "Export Services",
    text: "Carefully graded, export-ready packing and documentation for banana shipments overseas.",
  },
  {
    icon: "🎁",
    title: "Custom Packaging",
    text: "Branded crates, gift boxes, and retail-ready packaging tailored to your order size and occasion.",
  },
  {
    icon: "🧺",
    title: "Subscription Boxes",
    text: "A recurring box of seasonal, hand-picked varieties delivered to your home on a schedule you choose.",
  },
  {
    icon: "🌾",
    title: "Farm Visits & Tours",
    text: "Guided walkthroughs of our hill farms — see the harvesting and grading process firsthand.",
  },
];

export default function Services() {
  return (
    <>
      <section className="section section-first">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">What We Offer</div>
            <h2>Our Services</h2>
            <p>From farm to doorstep — everything we offer to keep your fruit fresh, wherever it's headed.</p>
          </div>

          <div className="services-grid">
            {services.map((s, i) => (
              <div className="service-card" key={i}>
                <div className="icon">{s.icon}</div>
                <h4>{s.title}</h4>
                <p>{s.text}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 50 }}>
            <Link to="/contact" className="btn btn-primary">
              Enquire About a Service →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

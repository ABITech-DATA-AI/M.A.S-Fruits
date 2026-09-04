import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import WhatsAppIcon from "../../components/WhatsAppIcon.jsx";
import products from "../../data/products.js";
import homeHeroImages from "./homeHeroImages.js";
import monthanBanana from "../../assets/images/hill-banana.jpg";
import about from "../../assets/images/about.jpeg";
import bananaFarmHero from "../../assets/images/banana-farm-hero.jpg";
import "./Home.css";

// ============================================================================
//  🍌 HOME PAGE — FEATURED PRODUCTS (EDIT HERE) 🍌
//  Controls exactly which 4 products appear in the "Fresh Banana Varieties"
//  section below. To change a product, just swap its id for any other id
//  from src/data/products.js (order = display order, left to right).
//  Full id list: red-banana, elaichi-banana, yelakki-banana, poovan-banana,
//  raw-banana, monthan-banana, hill-banana, nendran-banana,
//  karpuravalli-banana, rasthali-banana
// ============================================================================
const FEATURED_PRODUCT_IDS = ["hill-banana", "red-banana", "nendran-banana", "yelakki-banana"];

export default function Home() {
  // Resolve the 4 ids above into full product objects, in that order.
  const featuredProducts = FEATURED_PRODUCT_IDS.map((id) => products.find((p) => p.id === id)).filter(Boolean);


  return (
    <>
      {/* ---------------- HERO — exact replica of the MAS Fruits homepage design ---------------- */}
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: `url(${bananaFarmHero})` }} />
        <div className="hero-tint" />
        <div className="hero-overlay" />
        <div className="container hero-inner">
          
          <div className="hero-feature">
            <div className="feature-circle">
              <img src={monthanBanana} alt="Hill Banana" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="hill-badge">
              <div className="hill-badge-shape">
                <span className="leaf-decor">🍃</span>
                <span className="leaf-decor leaf-decor-2">🍃</span>
                <div className="kicker">
                  <span className="spark">✦ OUR SPECIAL ✦</span>
                </div>
                <h3>
                  HILL
                  BANANA
                </h3>
                <span className="underline"></span>
              </div>
            </div>
          </div>

          <div className="hero-center">

            <div className="headline">
              <span className="l1">Naturally</span>
              <span className="l2">Delicious</span>
              <span className="l3">Fresh From Our Farms</span>
            </div>

            <div className="hero-actions">
              <Link to="/products" className="btn btn-primary">
                🍃 Explore Products →
              </Link>
              <a
                href="https://wa.me/918015010397"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <WhatsAppIcon size={18} /> Chat on WhatsApp →
              </a>
            </div>
          </div>

          <div className="hero-grid-col">
            <div className="hero-grid">
              {/* Each of these 6 circles is its own individually-editable image —
                  see homeHeroImages.js to swap any one photo on its own. */}
              {homeHeroImages.map((h) => (
                <div className="mini-card" key={h.id}>
                  <div className="circle">
                    <img src={h.image} alt={h.label} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div className="label">
                    <span className="label-icon">🍃</span>
                    {h.label.toUpperCase()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- ABOUT SPLIT ---------------- */}
      <section className="section">
        <div className="container split">
          <div className="img-box" style={{ borderRadius: 18, overflow: "hidden", boxShadow: "var(--shadow)" }}>
            <img src={about} alt="MAS Fruits Farm" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div>
            <div className="eyebrow" style={{ color: "var(--leaf-green)", fontWeight: 700, letterSpacing: 2, fontSize: 13 }}>
              ABOUT MAS FRUITS
            </div>
            <h2>Grown With Care, Delivered With Love</h2>
            <p>
              For generations, MAS Fruits has cultivated bananas across our own hill
              farms using pure, natural growing methods — no shortcuts, just sunshine,
              rich soil, and patience.
            </p>
            <p>
              From Red Banana to our signature Hill Banana, every bunch is
              hand-picked at peak ripeness and delivered fresh to your door.
            </p>
            <div className="stat-row">
              <div className="stat">
                <h3>15+</h3>
                <span>YEARS FARMING</span>
              </div>
              <div className="stat">
                <h3>10+</h3>
                <span>BANANA VARIETIES</span>
              </div>
              <div className="stat">
                <h3>5000+</h3>
                <span>HAPPY CUSTOMERS</span>
              </div>
            </div>
            <Link to="/about" className="btn btn-primary" style={{ marginTop: 24 }}>
              Learn Our Story →
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- PRODUCTS PREVIEW ---------------- */}
      <section className="section section-alt" id="products">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Our Fruits</div>
            <h2>Fresh Banana Varieties</h2>
          </div>
          <div className="products-grid">
            {featuredProducts.map((p) => (
              <ProductCard key={p.id} {...p} mode="plain" />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link to="/products" className="btn btn-primary">
              View All 10 Products →
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- WHY CHOOSE US ---------------- */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Why Choose Us</div>
            <h2>Pure. Fresh. Natural.</h2>
            <p>Everything we grow follows one simple promise — quality you can taste.</p>
          </div>
          <div className="feature-grid">
            {[
              { icon: "🌱", title: "Organically Grown", text: "No harmful chemicals — just natural farming on our own hill land." },
              { icon: "🚚", title: "Farm-Fresh Delivery", text: "Harvested and shipped fast so freshness reaches your table." },
              { icon: "✅", title: "Quality Checked", text: "Every bunch is graded and inspected before it leaves our farm." },
              { icon: "🤝", title: "Trusted by Thousands", text: "Loved by families and retailers across the region for years." },
            ].map((f, i) => (
              <div className="feature-card" key={i}>
                <div className="icon">{f.icon}</div>
                <h4>{f.title}</h4>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="section" style={{ paddingBottom: 100 }}>
        <div
          className="container"
          style={{
            background: "linear-gradient(120deg, var(--gold), #ffe27a)",
            borderRadius: 24,
            padding: "50px 40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <div>
            <h2 style={{ fontFamily: "var(--font-head)", color: "var(--dark-green)", fontSize: 30 }}>
              Ready to taste real freshness?
            </h2>
            <p style={{ color: "#3a4a2a", marginTop: 8 }}>
              Order farm-fresh bananas today or get in touch with our team.
            </p>
          </div>
          <Link to="/contact" className="btn btn-primary">
            Contact Us →
          </Link>
        </div>
      </section>
    </>
  );
}

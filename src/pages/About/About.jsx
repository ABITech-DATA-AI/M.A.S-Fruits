import React from "react";
import BananaSVG from "../../components/BananaSVG.jsx";
import about1 from "../../assets/images/about1.jpg";
import "./About.css";

export default function About() {
  return (
    <>
      <section className="section section-first">
        <div className="container">
          <div className="split">
            <div className="img-box">
              <img src={about1} alt="MAS Fruits Banana Farm" />
            </div>
            <div>
              <div
                className="eyebrow"
                style={{ color: "var(--leaf-green)", fontWeight: 700, letterSpacing: 2, fontSize: 13 }}
              >
                OUR STORY
              </div>
              <h2>From Hillside Farms to Your Home</h2>
              <p>
                MAS Fruits began as a small family farm nestled in the hills, growing
                bananas the traditional way — with patience, rich volcanic soil, and
                generations of know-how.
              </p>
              <p>
                Today we cultivate more than ten banana varieties across our farms,
                staying true to our founding promise: pure, fresh, and natural fruit,
                every single time.
              </p>
              <p>
                We work directly with local growers, ensuring fair returns and
                sustainable farming practices that protect the land for the next
                generation.
              </p>
            </div>
          </div>

          {/* ---------------- MISSION & VISION (merged into Our Story) ---------------- */}
          <div className="mv-grid">
            <div className="mv-card mv-card-mission">
              <h3>🎯 Our Mission</h3>
              <p>
                To grow and deliver the freshest, naturally cultivated bananas
                straight from our own hill farms — without shortcuts, artificial
                ripening, or compromise — while treating every farmer and worker
                as part of the MAS Fruits family.
              </p>
              <span className="mv-bar"></span>
            </div>
            <div className="mv-card mv-card-vision">
              <h3>🔭 Our Vision</h3>
              <p>
                To be the most trusted name in natural, farm-fresh bananas —
                known for purity and quality — while protecting the soil, water,
                and hillside land that our farms depend on for generations to come.
              </p>
              <span className="mv-bar"></span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Our Values</div>
            <h2>What We Stand For</h2>
          </div>
          <div className="feature-grid">
            {[
              { icon: "🌿", title: "Purity", text: "No artificial ripening, no shortcuts — nature does the work." },
              { icon: "❤️", title: "Care", text: "Every farmer and worker is treated as part of our family." },
              { icon: "🌍", title: "Sustainability", text: "Farming methods that protect soil and water for the future." },
              { icon: "⭐", title: "Quality", text: "Only the best bunches make it from our farm to your basket." },
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
    </>
  );
}

import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  Eye,
  HandHeart,
  Leaf,
  MapPin,
  PackageCheck,
  Scale,
  Truck,
} from "lucide-react";
import { Link } from "react-router-dom";
import hillBanana from "../../assets/images/hill-banana.jpg";
import yelakkiBanana from "../../assets/images/yelakki-banana.jpg";
import redBanana from "../../assets/images/red-banana.jpg";
import rawBanana from "../../assets/images/raw-banana.jpg";
import "./Quality.css";

const journey = [
  {
    number: "01",
    title: "Direct Farm Sourcing",
    text: "We work directly with trusted growers and sourcing regions to select bananas with the freshness and characteristics our customers expect.",
    icon: Leaf,
  },
  {
    number: "02",
    title: "Right Maturity",
    text: "Harvest timing matters. Bunches are selected according to variety and the maturity stage needed for transport, storage and delivery.",
    icon: Eye,
  },
  {
    number: "03",
    title: "Careful Grading",
    text: "Batches are checked for variety, size, colour, firmness, appearance and overall condition before they are prepared for dispatch.",
    icon: Scale,
  },
  {
    number: "04",
    title: "Gentle Handling",
    text: "From sorting to packing, our team handles the fruit carefully to help reduce unnecessary damage and preserve its natural quality.",
    icon: HandHeart,
  },
  {
    number: "05",
    title: "Reliable Transport",
    text: "Our own transport network helps us move bananas efficiently from sourcing locations to customers with planned delivery schedules.",
    icon: Truck,
  },
  {
    number: "06",
    title: "Bulk Order Check",
    text: "Whether you need 100 kg or a larger commercial quantity, orders are prepared with attention to the requested variety, quantity and condition.",
    icon: PackageCheck,
  },
];

const standards = [
  "Direct sourcing from trusted growers",
  "Variety-wise selection and grading",
  "Freshness-focused handling",
  "Careful preparation before dispatch",
  "Planned delivery for bulk requirements",
  "Clear communication with wholesale customers",
];

const sourcingAreas = [
  "Yelagiri",
  "Jawadhu Hills",
  "Puthur Nadu",
  "Ooty",
  "Kodaikanal",
  "Andhra Pradesh",
];

const varieties = [
  { name: "Hill Banana", image: hillBanana },
  { name: "Yelakki Banana", image: yelakkiBanana },
  { name: "Red Banana", image: redBanana },
  { name: "Raw Banana", image: rawBanana },
];

export default function Quality() {
  return (
    <div className="quality-page">
      <section className="quality-intro section">
        <div className="container quality-intro-grid">
          <div className="quality-intro-heading">
            <div className="eyebrow">The M.A.S Difference</div>
            <h2>We look beyond the bunch.</h2>
          </div>
          <div className="quality-intro-text">
            <p>
              Good fruit starts long before it reaches the market. We focus on where the bananas come from, when they are harvested, how they are selected and how they travel. That farm-to-customer approach helps us maintain consistency across everyday and bulk orders.
            </p>
            <div className="quality-mini-stats">
              <div>
                <strong>100 KG+</strong>
                <span>Bulk order starting point</span>
              </div>
              <div>
                <strong>10 TONNES</strong>
                <span>Large order capacity</span>
              </div>
              <div>
                <strong>Direct</strong>
                <span>Grower-focused sourcing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="quality-journey section">
        <div className="container">
          <div className="section-head quality-section-head">
            <div className="eyebrow">Our Quality Journey</div>
            <h2>From Farm Selection to Final Delivery</h2>
            <p>
              Six practical checkpoints help us protect freshness and prepare every order with care.
            </p>
          </div>

          <div className="quality-journey-grid">
            {journey.map((item) => {
              const Icon = item.icon;
              return (
                <article className="quality-journey-card" key={item.number}>
                  <div className="quality-card-top">
                    <span className="quality-number">{item.number}</span>
                    <div className="quality-icon">
                      <Icon size={21} strokeWidth={2.1} />
                    </div>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span className="quality-card-line" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="quality-standards section">
        <div className="container">
          <div className="quality-standards-shell">
            <div className="quality-standards-image">
              <img src={redBanana} alt="Fresh red bananas selected for quality" />
              <div className="quality-image-note">
                <MapPin size={18} />
                <span>Farm-direct sourcing</span>
              </div>
            </div>
            <div className="quality-standards-content">
              <div className="eyebrow">Our Standard</div>
              <h2>Simple standards. Serious about quality.</h2>
              <p>
                We keep our quality promise practical and transparent. Every stage is about protecting the natural freshness of the fruit and giving wholesale buyers confidence in what they receive.
              </p>
              <div className="quality-check-list">
                {standards.map((standard) => (
                  <div className="quality-check" key={standard}>
                    <CheckCircle2 size={19} />
                    <span>{standard}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="quality-sourcing section">
        <div className="container">
          <div className="section-head quality-section-head">
            <div className="eyebrow">Sourcing Network</div>
            <h2>Closer to the farms. Closer to freshness.</h2>
            <p>
              We source from selected farming regions and bring different banana varieties to customers through a direct, organised supply process.
            </p>
          </div>

          <div className="sourcing-layout">
            <div className="sourcing-map-card">
              <div className="sourcing-map-glow" />
              <MapPin className="sourcing-map-pin pin-one" size={25} />
              <MapPin className="sourcing-map-pin pin-two" size={25} />
              <MapPin className="sourcing-map-pin pin-three" size={25} />
              <div className="sourcing-map-content">
                <span>DIRECT SOURCING</span>
                <strong>Selected growing regions</strong>
                <p>Built around farmer relationships, variety availability and customer demand.</p>
              </div>
            </div>

            <div className="sourcing-area-list">
              {sourcingAreas.map((area, index) => (
                <div className="sourcing-area" key={area}>
                  <span>0{index + 1}</span>
                  <MapPin size={17} />
                  <strong>{area}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="quality-cta">
        <div className="container">
          <div className="quality-cta-shell">
            <div>
              <div className="eyebrow quality-cta-eyebrow">Ready for Your Next Order?</div>
              <h2>Quality bananas, prepared for your business.</h2>
              <p>
                Tell us the variety and quantity you need. We handle bulk requirements from 100 kg upwards and plan the order around your delivery needs.
              </p>
            </div>
            <Link to="/contact" className="btn btn-gold">
              Start a Bulk Enquiry <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import BananaSVG from "../BananaSVG.jsx";
import "./ProductModal.css";

// Click-to-open popup used by every product card (and the Hill Banana
// featured card) to show nutrition facts + health benefits for that
// specific variety. `product` is one entry from src/data/products.js.
export default function ProductModal({ product, onClose }) {
  // Close on Escape, and lock background scroll while open.
  useEffect(() => {
    if (!product) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [product, onClose]);

  if (!product) return null;

  const { name, desc, image, variant, tag, nutrition, benefits } = product;

  return createPortal(
    <div className="pm-overlay" onClick={onClose}>
      <div
        className="pm-box"
        role="dialog"
        aria-modal="true"
        aria-label={`${name} details`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="pm-close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <div className="pm-header">
          <div className="pm-photo">
            {image ? <img src={image} alt={name} /> : <BananaSVG variant={variant} size={110} />}
          </div>
          <div>
            {tag && <span className="pm-tag">{tag}</span>}
            <h3>{name}</h3>
            <p className="pm-desc">{desc}</p>
          </div>
        </div>

        {nutrition && (
          <div className="pm-section">
            <h4>Nutrition Facts <span>(per 100g, approx.)</span></h4>
            <div className="pm-nutrition-grid">
              {Object.entries(nutrition).map(([label, value]) => (
                <div className="pm-nutri-item" key={label}>
                  <span className="pm-nutri-value">{value}</span>
                  <span className="pm-nutri-label">{label}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {benefits && benefits.length > 0 && (
          <div className="pm-section">
            <h4>Good For You</h4>
            <ul className="pm-benefits">
              {benefits.map((b, i) => (
                <li key={i}>
                  <span className="pm-check">✓</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}

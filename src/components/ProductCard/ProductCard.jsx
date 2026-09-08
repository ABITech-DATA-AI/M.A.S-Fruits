import React from "react";
import BananaSVG from "../BananaSVG.jsx";
import "./ProductCard.css";

// Two display modes, both clickable to open the nutrition/benefits popup
// (via the `onOpen` callback passed down from the page):
//
//  - mode="plain" (Home page): simple card — image on top, name, then the
//    short description underneath. No flip.
//  - mode="flip" (Products page, default): the image fills the entire
//    card with the name overlaid directly on top of it; hovering flips
//    the card over to reveal the description.
export default function ProductCard({ name, desc, variant, tag, image, onOpen, mode = "flip" }) {
  const handleKeyDown = (e) => (e.key === "Enter" || e.key === " ") && onOpen && onOpen();

  if (mode === "plain") {
    return (
      <div className="product-card-plain" onClick={onOpen} role="button" tabIndex={0} onKeyDown={handleKeyDown}>
        {tag && <span className="tag">{tag}</span>}
        <div className="photo">
          {image ? (
            <img src={image} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }} />
          ) : (
            <BananaSVG variant={variant} size={130} />
          )}
        </div>
        <h3>{name}</h3>
        <p>{desc}</p>
      </div>
    );
  }

  return (
    <div className="product-card-flip" onClick={onOpen} role="button" tabIndex={0} onKeyDown={handleKeyDown}>
      <div className="product-card-flip-inner">
        {/* ---- FRONT: image fills the whole card, name overlaid on top ---- */}
        <div className="product-card-face product-card-front">
          {tag && <span className="tag">{tag}</span>}
          {image ? (
            <img className="product-card-bg-img" src={image} alt={name} />
          ) : (
            <div className="product-card-bg-svg">
              <BananaSVG variant={variant} size={130} />
            </div>
          )}
          <div className="product-card-front-caption">
            <h3>{name}</h3>
            <span className="mobile-view-more">View More <span aria-hidden="true">→</span></span>
          </div>
        </div>

        {/* ---- BACK: revealed on hover ---- */}
        <div className="product-card-face product-card-back">
          <h3>{name}</h3>
          <p>{desc}</p>
          <span className="view-details">Tap to see nutrition & benefits →</span>
        </div>
      </div>
    </div>
  );
}

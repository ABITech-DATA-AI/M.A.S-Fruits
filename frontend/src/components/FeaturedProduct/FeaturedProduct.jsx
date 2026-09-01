import React from "react";
import BananaSVG from "../BananaSVG.jsx";
import "./FeaturedProduct.css";

// Large "row 1" spotlight card for Hill Banana — MAS Fruits' signature
// variety — sitting above the regular 3-per-row product grid.
// The photo blinks gently to draw the eye, and clicking anywhere on the
// card opens the nutrition/benefits popup for Hill Banana (via `onOpen`).
export default function FeaturedProduct({ name, desc, variant, image, onOpen }) {
  return (
    <div
      className="featured-product"
      onClick={onOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onOpen && onOpen()}
    >
      <div className="featured-product-photo featured-product-photo-blink">
        <span className="featured-product-ribbon">
          <span className="spark">✦</span> Our Special <span className="spark">✦</span>
        </span>
        {image ? (
          <img src={image} alt={name} />
        ) : (
          <BananaSVG variant={variant} size={220} />
        )}
      </div>
      <div className="featured-product-info">
        <span className="tag">Signature Variety</span>
        <h3>{name}</h3>
        <p>{desc}</p>
        <span className="featured-product-cta">Tap for nutrition & benefits →</span>
      </div>
    </div>
  );
}

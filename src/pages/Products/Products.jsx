import React, { useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import FeaturedProduct from "../../components/FeaturedProduct/FeaturedProduct.jsx";
import ProductModal from "../../components/ProductModal/ProductModal.jsx";
import products from "../../data/products.js";
import "./Products.css";

export default function Products() {
  // Hill Banana leads the catalogue as one large featured card; every
  // other variety (9 cards) follows underneath in a strict 3-per-row
  // grid, each flipping on hover and opening its own nutrition/benefits
  // popup on click.
  const hillBanana = products.find((p) => p.id === "hill-banana");
  const rest = products.filter((p) => p.id !== "hill-banana");

  // Which product's popup is currently open (null = closed).
  const [activeProduct, setActiveProduct] = useState(null);

  return (
    <>
      <section className="section section-first">
        <div className="container">
          <div className="section-head">
            <h2>10 Naturally Grown Banana Varieties</h2>
          </div>

          {hillBanana && (
            <FeaturedProduct {...hillBanana} onOpen={() => setActiveProduct(hillBanana)} />
          )}

          <div className="products-grid-3">
            {rest.map((p) => (
              <ProductCard key={p.id} {...p} onOpen={() => setActiveProduct(p)} />
            ))}
          </div>
        </div>
      </section>

      <ProductModal product={activeProduct} onClose={() => setActiveProduct(null)} />
    </>
  );
}

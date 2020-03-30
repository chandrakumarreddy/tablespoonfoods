import React from "react";
import "./FeaturedProducts.css";

export default function FeaturedProducts({ products }) {
  return (
    <article className="featuredProducts m2">
      <h1 className="rem2 mb2 text-center">FeaturedProducts</h1>
      <div className="featuredProducts__items">
        {products.map((_product, index) => (
          <div key={index} className="featuredProducts__items--item">
            <img src={_product} alt={_product} width="100%" height="100%" />
          </div>
        ))}
      </div>
    </article>
  );
}

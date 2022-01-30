import React from "react";
import "./productCard.css";

function ProductCard({ name, keyId, price, image, creator }) {
  return (
    <div className="productCard">
      <h3>{name}</h3>
      <img src={!image ? "logo.png" : image.url} />
      <p>{creator.name}</p>
      <p>{price.formatted_with_symbol}</p>
    </div>
  );
}

export default ProductCard;

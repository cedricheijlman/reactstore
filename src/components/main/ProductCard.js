import React from "react";
import "./productCard.css";

function ProductCard({ name, keyId, price, image, creator }) {
  return (
    <div className="productCard">
      <img src={!image ? "logo.png" : image.url} />
      <div>
        <h3>{name}</h3>
        <p>{creator.name}</p>
        <p>{price.formatted_with_symbol}</p>
      </div>
    </div>
  );
}

export default ProductCard;

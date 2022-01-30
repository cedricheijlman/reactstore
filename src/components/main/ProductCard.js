import React from "react";
import "./productCard.css";

function ProductCard({ name, keyId, price, image, creator }) {
  return (
    <div className="productCard">
      <img src={!image ? "logo.png" : image.url} />
      <div className="productCard__text">
        <h4>{creator.name}</h4>
        <h3>{name}</h3>
        <div className="productCard__priceAndStock">
          <p>{price.formatted_with_symbol}</p>
          <p>Stock:</p>
        </div>
        <button>Add To Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;

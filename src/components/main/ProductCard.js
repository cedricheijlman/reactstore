import React, { useContext } from "react";
import commerce from "../../lib/commerce";
import { ProductContext } from "../../ProductContext";
import "./productCard.css";

function ProductCard({ name, keyId, price, image, creator, stock }) {
  // Add Item to Cart

  const { setCheckOutCart } = useContext(ProductContext);
  function addToCart(idItem) {
    commerce.cart.add(keyId, 1).then((res) => {
      console.log(res);
    });

    commerce.cart.retrieve().then((cart) => {
      setCheckOutCart(cart);
    });
  }
  return (
    <div className="productCard">
      <img src={!image ? "logo.png" : image.url} />
      <div className="productCard__text">
        <h4>{creator.name}</h4>
        <h3>{name}</h3>
        <div className="productCard__priceAndStock">
          <p>{price.formatted_with_symbol}</p>
          <p>Available: {stock}</p>
        </div>
        <button
          onClick={(keyId) => {
            addToCart(keyId);
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;

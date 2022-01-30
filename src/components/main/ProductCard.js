import React, { useContext } from "react";
import "./productcard.css";
import commerce from "../../lib/commerce";
import { ProductContext } from "../../ProductContext";

function ProductCard({ name, keyId, price, image, creator, stock }) {
  const { setCheckOutCart } = useContext(ProductContext);

  // Add Item to Cart
  function addToCart(idItem, e) {
    // Animation Cart Add
    e.target.classList.add("cartScaleButton");
    e.target.innerHTML = "Added to cart";
    document.querySelector(".cartLength").classList.add("cartScale");

    // add item
    commerce.cart.add(keyId, 1).then((res) => {
      setCheckOutCart(res.cart);

      setInterval(() => {
        document.querySelector(".cartLength").classList.remove("cartScale");
        e.target.innerHTML = "Add to cart";
        e.target.classList.remove("cartScaleButton");
      }, 2000);
    });
  }
  return (
    <div className="productCard">
      <img src={!image ? "logo192.png" : image.url} />
      <div className="productCard__text">
        <h4>{creator ? creator.name : "Artist"}</h4>
        <h3>{name}</h3>
        <div className="productCard__priceAndStock">
          <p>{price.formatted_with_symbol}</p>
          <p>Available: {stock}</p>
        </div>
        <button
          onClick={(e) => {
            addToCart(keyId, e);
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;

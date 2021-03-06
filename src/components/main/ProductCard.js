import React, { useContext } from "react";
import "./productcard.css";
import commerce from "../../lib/commerce";
import { ProductContext } from "../../ProductContext";
import { Link } from "react-router-dom";
function ProductCard({
  name,
  keyId,
  price,
  image,
  creator,
  stock,
  categoryId,
}) {
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
    });

    // animation Cart add
    setInterval(() => {
      document.querySelector(".cartLength").classList.remove("cartScale");
      e.target.innerHTML = "Add to cart";
      e.target.classList.remove("cartScaleButton");
    }, 2000);
  }
  return (
    <div className="productCard">
      <Link to={`/product/${keyId}`}>
        <img src={!image ? "logo192.png" : image.url} />
      </Link>
      <div className="productCard__text">
        <Link to={`/category/${categoryId}`}>
          <h4>{creator ? creator.name : "Artist"}</h4>
        </Link>
        <Link to={`/product/${keyId}`}>
          <h3>{name}</h3>
        </Link>
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

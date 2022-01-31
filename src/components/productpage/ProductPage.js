import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import commerce from "../../lib/commerce";
import { ProductContext } from "../../ProductContext";
import "./productpage.css";

function ProductPage() {
  const [productInfo, setProductInfo] = useState(null);
  const { setCheckOutCart } = useContext(ProductContext);

  useEffect(() => {
    const productPath = window.location.pathname.slice(9);
    commerce.products.retrieve(String(productPath)).then((product) => {
      setProductInfo(product);
    });
  }, []);

  // Add Item to cart
  function addToCart(id, e) {
    // Animation button
    e.target.innerHTML = "Added to cart";
    e.target.classList.add("cartScaleButton");

    // Add to cart
    commerce.cart.add(id, 1).then((res) => {
      setCheckOutCart(res.cart);
    });

    // Animation cart button
    setInterval(() => {
      e.target.innerHTML = "Add to Cart";
      e.target.classList.remove("cartScaleButton");
    }, 2000);
  }

  return (
    <div id="productInfo">
      {productInfo && (
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(6, 6, 6, 0.6)), url('${
              productInfo.image &&
              productInfo.image.url.replace(/\s/g, "%20") !== "" &&
              productInfo.image !== ""
                ? productInfo.image.url.replace(/\s/g, "%20")
                : ""
            }') `,
          }}
          className="productInfo__card"
        >
          <img
            src={
              productInfo.image !== null
                ? productInfo.image.url
                : "../logo192.png"
            }
          />

          <h3>{productInfo.name}</h3>
          <Link to={`/category/${productInfo.categories[0].id}`}>
            <h6>
              {productInfo.categories[0] && productInfo.categories[0].name}
            </h6>
          </Link>
          {
            <span
              className="productInfo__description"
              dangerouslySetInnerHTML={{ __html: productInfo.description }}
            />
          }
          <div className="productInfo__purchase">
            <p>{productInfo.price.formatted_with_symbol}</p>
            <button
              onClick={(e) => {
                addToCart(productInfo.id, e);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductPage;

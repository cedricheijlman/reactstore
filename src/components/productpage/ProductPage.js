import React, { useContext, useEffect, useState } from "react";
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

  function addToCart(id, e) {
    commerce.cart.add(id, 1).then((res) => {
      setCheckOutCart(res.cart);
    });
  }
  console.log("ProductInfo", productInfo);
  return (
    <div id="productInfo">
      {productInfo && (
        <div className="productInfo__card">
          <img
            src={
              productInfo.image !== null
                ? productInfo.image.url
                : "../logo192.png"
            }
          />
          <h3>{productInfo.name}</h3>
          <h6>{productInfo.categories[0] && productInfo.categories[0].name}</h6>
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

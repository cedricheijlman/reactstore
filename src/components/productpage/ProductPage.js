import React, { useEffect, useState } from "react";
import commerce from "../../lib/commerce";
import "./productpage.css";

function ProductPage() {
  const [productInfo, setProductInfo] = useState(null);

  useEffect(() => {
    const productPath = window.location.pathname.slice(9);
    commerce.products.retrieve(String(productPath)).then((product) => {
      setProductInfo(product);
    });
  }, []);
  console.log("Product", productInfo);
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
            <button>Add to Cart</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductPage;

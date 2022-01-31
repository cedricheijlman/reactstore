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
    <>
      {productInfo && (
        <div>
          <h1>Text</h1>
        </div>
      )}
    </>
  );
}

export default ProductPage;

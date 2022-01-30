import React, { useEffect, useState } from "react";
import commerce from "../../lib/commerce";

function CheckOutItem({ productId, orderItem }) {
  const [productInfo, setProductInfo] = useState(null);

  useEffect(() => {
    commerce.products.retrieve(productId).then((item) => {
      setProductInfo(item);
    });
  }, []);

  return (
    <>
      {productInfo && (
        <div className="checkOut__item">
          <div className="checkOut__itemLeft">
            <img src={orderItem.image.url} />
            <div>
              <h3>{productInfo.name}</h3>
              <p>{productInfo.categories[0].name}</p>
              <p>{orderItem.line_total.formatted_with_symbol}</p>
            </div>
          </div>
          <div>
            <h2>{orderItem.quantity}</h2>
          </div>
        </div>
      )}
    </>
  );
}

export default CheckOutItem;

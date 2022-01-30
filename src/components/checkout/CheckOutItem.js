import React, { useContext, useEffect, useState } from "react";
import commerce from "../../lib/commerce";
import { ProductContext } from "../../ProductContext";

function CheckOutItem({ productId, orderItem }) {
  const [productInfo, setProductInfo] = useState(null);
  const { setCheckOutCart } = useContext(ProductContext);
  useEffect(() => {
    commerce.products.retrieve(productId).then((item) => {
      setProductInfo(item);
    });
  }, []);

  function remove(orderItem) {
    commerce.cart.remove(orderItem.id).then((res) => {
      setCheckOutCart(res.cart);
    });
  }

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
            <button
              onClick={() => {
                remove(orderItem);
              }}
            >
              Remove
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default CheckOutItem;

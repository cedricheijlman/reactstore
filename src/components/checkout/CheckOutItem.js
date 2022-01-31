import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
            <Link to={`/product/${productInfo.id}`}>
              <img
                src={orderItem.image ? orderItem.image.url : "logo192.png"}
              />
            </Link>
            <div>
              <Link to={`/product/${productInfo.id}`}>
                <h3>{productInfo.name}</h3>
              </Link>
              <Link to={`/category/${productInfo.categories[0].id}`}>
                <p>
                  {productInfo.categories[0]
                    ? productInfo.categories[0].name
                    : "Store"}
                </p>
              </Link>
              <p style={{ marginTop: "5px" }}>
                {orderItem.line_total.formatted_with_symbol}
              </p>
            </div>
          </div>

          <div className="checkOut__itemRight">
            <p>Quantity: {orderItem.quantity}</p>
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

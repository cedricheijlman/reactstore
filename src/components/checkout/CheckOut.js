import React, { useEffect, useState, useContext } from "react";
import commerce from "../../lib/commerce";
import { ProductContext } from "../../ProductContext";
import "./checkOut.css";
import CheckOutItem from "./CheckOutItem";

function CheckOut() {
  const { checkOutCart } = useContext(ProductContext);
  console.log(checkOutCart);
  return (
    <div id="checkOut">
      <div className="checkOut__itemsRow">
        {checkOutCart &&
          checkOutCart.line_items.map((item) => {
            return (
              <CheckOutItem
                productId={item.product_id}
                orderItem={item}
                key={item.id}
              />
            );
          })}
      </div>
    </div>
  );
}

export default CheckOut;

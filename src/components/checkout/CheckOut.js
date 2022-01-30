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
      {checkOutCart && checkOutCart.line_items.length > 0 && (
        <div className="checkOut__itemsRow">
          {checkOutCart.line_items.map((item) => {
            return (
              <CheckOutItem
                productId={item.product_id}
                orderItem={item}
                key={item.id}
              />
            );
          })}
          <div className="total">
            <h2>Total: {checkOutCart.subtotal.formatted_with_symbol}</h2>
          </div>
        </div>
      )}
      {checkOutCart && checkOutCart.line_items.length < 1 && <h1>No items</h1>}
    </div>
  );
}

export default CheckOut;

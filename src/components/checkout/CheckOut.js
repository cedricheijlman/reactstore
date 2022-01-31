import React, { useEffect, useState, useContext } from "react";
import commerce from "../../lib/commerce";
import { ProductContext } from "../../ProductContext";
import "./checkOut.css";
import CheckOutItem from "./CheckOutItem";

function CheckOut() {
  const { checkOutCart } = useContext(ProductContext);

  return (
    <div id="checkOut">
      {checkOutCart && checkOutCart.line_items.length > 0 && (
        <div className="checkOut__itemsRow fade-in">
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
            <button>
              <a href={checkOutCart.hosted_checkout_url}>Purchase</a>
            </button>
          </div>
        </div>
      )}
      {checkOutCart && checkOutCart.line_items.length < 1 && (
        <h1 className="noItems">No items</h1>
      )}
    </div>
  );
}

export default CheckOut;

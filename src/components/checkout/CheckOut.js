import React, { useEffect, useState } from "react";
import commerce from "../../lib/commerce";
import "./checkOut.css";

function CheckOut() {
  const [checkOutCart, setCheckOutCart] = useState([]);

  useEffect(() => {
    commerce.cart.retrieve().then((items) => {
      setCheckOutCart(items);
      console.log(items);
    });
  }, []);

  return (
    <div id="checkOut">
      <div></div>
    </div>
  );
}

export default CheckOut;

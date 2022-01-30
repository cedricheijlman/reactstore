import "./App.css";
import React, { useEffect, useState } from "react";
import commerce from "./lib/commerce";
import Header from "./components/header/Header";
import HomePage from "./components/homepage/HomePage";
import { Routes, Route } from "react-router-dom";
import { ProductContext } from "./ProductContext";
import CheckOut from "./components/checkout/CheckOut";

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [checkOutCart, setCheckOutCart] = useState(null);
  useEffect(() => {
    // set All products Test
    commerce.products.list().then((products) => {
      setAllProducts(products.data);
    });

    // set shoppingCartData
    commerce.cart.retrieve().then((cart) => {
      setCheckOutCart(cart);
    });
  }, []);

  return (
    <div className="App">
      <ProductContext.Provider
        value={{ allProducts, setAllProducts, checkOutCart, setCheckOutCart }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
      </ProductContext.Provider>
    </div>
  );
}

export default App;

import "./App.css";
import React, { useEffect, useState } from "react";
import commerce from "./lib/commerce";
import Header from "./components/header/Header";
import HomePage from "./components/homepage/HomePage";
import { Routes, Route } from "react-router-dom";
import { ProductContext } from "./ProductContext";

function App() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    commerce.products.list().then((products) => {
      setAllProducts(products.data);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <ProductContext.Provider value={{ allProducts, setAllProducts }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </ProductContext.Provider>
    </div>
  );
}

export default App;

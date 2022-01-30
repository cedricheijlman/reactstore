import "./App.css";
import React, { useEffect, useState } from "react";
import commerce from "./lib/commerce";
import Header from "./components/header/Header";

import { Routes, Route } from "react-router-dom";
import HomePage from "./components/homepage/HomePage";

function App() {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    commerce.products.list().then((products) => {
      setProduct(products.data);
    });
  });

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;

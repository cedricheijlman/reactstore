import "./App.css";
import React, { useEffect, useState } from "react";
import commerce from "./lib/commerce";

function App() {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    commerce.products.list().then((products) => {
      setProduct(products.data);
    });
  });

  return (
    <div className="App">
      <button
        onClick={() => {
          console.log(products);
        }}
      >
        Button
      </button>
    </div>
  );
}

export default App;

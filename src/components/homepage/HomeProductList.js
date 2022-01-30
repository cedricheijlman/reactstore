import React, { useContext } from "react";
import ProductCard from "../main/ProductCard";
import { ProductContext } from "../../ProductContext";
function HomeProductList() {
  const { allProducts, setAllProducts } = useContext(ProductContext);
  console.log(allProducts);
  return (
    <div>
      {allProducts &&
        allProducts.map((product) => {
          return <ProductCard keyId={product.id} key={product.id} />;
        })}
    </div>
  );
}

export default HomeProductList;

import React, { useContext } from "react";
import ProductCard from "../main/ProductCard";
import { ProductContext } from "../../ProductContext";
function HomeProductList() {
  const { allProducts, setAllProducts } = useContext(ProductContext);

  return (
    <div className="allProductsList">
      {allProducts &&
        allProducts.map((product) => {
          return (
            <ProductCard
              name={product.name}
              keyId={product.id}
              key={product.id}
              price={product.price}
              image={product.image}
              creator={product.categories[0]}
              stock={product.inventory.available}
            />
          );
        })}
    </div>
  );
}

export default HomeProductList;

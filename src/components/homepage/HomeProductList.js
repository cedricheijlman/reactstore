import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../main/ProductCard";
import { ProductContext } from "../../ProductContext";
import commerce from "../../lib/commerce";
function HomeProductList({ search }) {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Get products
  useEffect(() => {
    setLoading(true);
    commerce.products.list({ query: search }).then((response) => {
      setAllProducts(response.data);
      setLoading(false);
    });
  }, [search]);

  console.log(allProducts);
  return (
    <div className="allProductsList">
      {loading == true && allProducts.length < 1 && (
        <h2 className="loading">Loading..</h2>
      )}
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

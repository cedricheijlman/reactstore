import React, { useEffect, useState } from "react";
import commerce from "../../lib/commerce";
import ProductCard from "../main/ProductCard";
import "./categorypage.css";

function CategoryPage() {
  const [category, setCategory] = useState({
    name: "",
    description: "",
    picture: null,
  });

  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    // Get product Id
    const productPath = window.location.pathname.slice(10);

    commerce.categories.retrieve(String(productPath)).then((artist) => {
      // Set category artist
      setCategory({
        name: artist.name,
        description: artist.description,
        picture: artist.assets[0].url,
      });
    });

    // Set category products
    commerce.products
      .list({ category_id: [String(productPath)] })
      .then((response) => {
        setCategoryProducts(response.data);
      });
  }, []);

  return (
    <div className="categoryPage">
      {category.name && (
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(6, 6, 6, 0.7)), url(${category.picture})`,
          }}
          className="categoryPage__artist"
        >
          <h2>{category.name}</h2>
          <img src={category.picture} />
          <p>{category.description}</p>
        </div>
      )}

      {categoryProducts.length > 0 && (
        <div className="categoryPage__artistProducts">
          <h2>Products</h2>
          <div className="categoryPage__productsRow">
            {categoryProducts.map((product) => {
              return (
                <ProductCard
                  name={product.name}
                  keyId={product.id}
                  key={product.id}
                  price={product.price}
                  image={product.image}
                  creator={product.categories[0]}
                  stock={product.inventory.available}
                  categoryId={product.categories[0] && product.categories[0].id}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default CategoryPage;

import React, { useEffect, useState } from "react";
import commerce from "../../lib/commerce";
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

  return <div className="categoryPage">Category Page</div>;
}

export default CategoryPage;

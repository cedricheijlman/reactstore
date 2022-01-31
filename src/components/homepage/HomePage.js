import React, { useState } from "react";
import "./homepage.css";
import HomeProductList from "./HomeProductList";

function HomePage() {
  const [search, setSearch] = useState(null);

  return (
    <div id="homepage">
      <input
        onChange={(e) =>
          e.target.value ? setSearch(e.target.value) : setSearch(null)
        }
      />
      <HomeProductList search={search} />
    </div>
  );
}

export default HomePage;

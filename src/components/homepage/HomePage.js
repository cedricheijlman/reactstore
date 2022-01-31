import React, { useState } from "react";
import "./homepage.css";
import HomeProductList from "./HomeProductList";

function HomePage() {
  const [search, setSearch] = useState(null);

  return (
    <div id="homepage">
      <input onChange={(e) => setSearch(e.target.value)} />
      <HomeProductList search={search} />
    </div>
  );
}

export default HomePage;

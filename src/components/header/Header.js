import React from "react";
import "./header.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Header() {
  return (
    <header id="navbar">
      <h1>Logo</h1>

      <div className="navbar__right">
        <ShoppingCartIcon className="cart"></ShoppingCartIcon>
      </div>
    </header>
  );
}

export default Header;

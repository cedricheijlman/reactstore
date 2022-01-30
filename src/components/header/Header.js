import React from "react";
import "./header.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header id="navbar">
      <h1>Logo</h1>

      <div className="navbar__right">
        <Link to="/checkout">
          <ShoppingCartIcon className="cart"></ShoppingCartIcon>
        </Link>
      </div>
    </header>
  );
}

export default Header;

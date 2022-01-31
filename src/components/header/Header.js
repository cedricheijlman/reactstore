import React, { useContext } from "react";
import "./header.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { ProductContext } from "../../ProductContext";
function Header() {
  const { checkOutCart } = useContext(ProductContext);

  return (
    <header id="navbar">
      <Link to="/">
        <h1>Album Store</h1>
      </Link>
      <div className="navbar__right">
        <span className="cartLength">
          {checkOutCart && checkOutCart.total_items}
        </span>
        <Link to="/checkout">
          <ShoppingCartIcon className="cart"></ShoppingCartIcon>
        </Link>
      </div>
    </header>
  );
}

export default Header;

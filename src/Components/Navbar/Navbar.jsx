import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import drop_down_icon from "../Assets/nav_dropdown.png";

const Navbar = () => {
  const { getTotalCartItems } = useContext(ShopContext);
  const [menu, setMenu] = useState("shop");
  const menuRef = useRef();

  const dropdown_toogle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>
      <img className="nav-dropdown" onClick={dropdown_toogle} src={drop_down_icon} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>{" "}
          {menu === "shop" && <hr />}
        </li>
        <li onClick={() => setMenu("men")}>
          <Link style={{ textDecoration: "none" }} to="/mens">
            Men
          </Link>{" "}
          {menu === "men" && <hr />}
        </li>
        <li onClick={() => setMenu("women")}>
          <Link style={{ textDecoration: "none" }} to="/womens">
            Women
          </Link>{" "}
          {menu === "women" && <hr />}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link style={{ textDecoration: "none" }} to="/kids">
            Kids
          </Link>{" "}
          {menu === "kids" && <hr />}
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>
          <Link style={{ textDecoration: "none" }} to="/login">
            Login
          </Link>
        </button>
        <Link style={{ textDecoration: "none" }} to="/cart">
          <img src={cart_icon} alt="cart" />
        </Link>
        <div className="nav-cart-cout">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;

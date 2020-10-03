import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAutheticated } from "../auth/helper";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#2ecc72" };
  } else {
    return { color: "#FFFFFF" };
  }
};

const Menu = ({ history }) => (
  <div className="main-menu d-none d-lg-block">
    <nav>
      <ul id="navigation">
        <li>
          <Link style={currentTab(history, "/")} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/">shop</Link>
        </li>
        <li>
          <Link>about</Link>
        </li>
        <li className="hot">
          <Link to="/">Latest</Link>
          <ul className="submenu">
            <li>
              <Link> Product list</Link>
            </li>
            <li>
              <Link to="/"> Product Details</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/">Blog</Link>
          <ul className="submenu">
            <li>
              <Link>Blog</Link>
            </li>
            <li>
              <Link to="/">Blog Details</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/">Pages</Link>
          <ul className="submenu">
            <li>
              <Link href="login.html">Login</Link>
            </li>
            <li>
              <Link to="/">Cart</Link>
            </li>
            <li>
              <Link>Element</Link>
            </li>
            <li>
              <Link to="/">Confirmation</Link>
            </li>
            <li>
              <Link>Product Checkout</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default withRouter(Menu);

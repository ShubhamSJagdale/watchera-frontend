import React from "react";
import { NavLink } from "react-router-dom";
//Css Import
// import "./Header.scss";
//Image import
import logo from "../assets/img/logo/logo.png";

const Header = () => {
  return (
    <div>
      <div className="header-area">
        <div className="main-header header-sticky">
          <div className="container-fluid">
            <div className="menu-wrapper">
              {/* <!-- Logo --> */}
              <div className="logo">
                <NavLink to="/">
                  <img src={logo} alt="" />
                </NavLink>
              </div>
              {/* <!-- Main-menu --> */}
              <div className="main-menu d-none d-lg-block">
                <nav>
                  <ul id="navigation">
                    <li>
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/shop">shop</NavLink>
                    </li>
                    <li>
                      <NavLink to="/aboutus">about</NavLink>
                    </li>
                    <li className="hot">
                      <a href="#">Latest</a>
                      <ul className="submenu">
                        <li>
                          <NavLink to="/shop"> Product list</NavLink>
                        </li>
                        <li>
                          <NavLink to="/latestproductdetails">
                            Product Details
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    {/* <li>
                      <a href="blog.html">Blog</a>
                      <ul className="submenu">
                        <li>
                          <a href="blog.html">Blog</a>
                        </li>
                        <li>
                          <a href="blog-details.html">Blog Details</a>
                        </li>
                      </ul>
                    </li> */}
                    <li>
                      {/* <a href="#">Pages</a> */}
                      <NavLink to="/login">Sign in</NavLink>
                      {/* <ul className="submenu">
                        <li>
                          <NavLink to="/login">Login</NavLink>
                        </li>
                        <li>
                          <a href="cart.html">Cart</a>
                        </li>
                        <li>
                          <a href="elements.html">Element</a>
                        </li>
                        <li>
                          <a href="confirmation.html">Confirmation</a>
                        </li>
                        <li>
                          <a href="checkout.html">Product Checkout</a>
                        </li>
                      </ul> */}
                    </li>
                    <li>
                      <NavLink to="contactus">Contact Us</NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* <!-- Header Right --> */}
              <div className="header-right">
                <ul>
                  <li>
                    <div className="nav-search search-switch">
                      <span className="flaticon-search"></span>
                    </div>
                  </li>
                  <li>
                    <a href="login.html">
                      <span className="flaticon-user"></span>
                    </a>
                  </li>
                  <li>
                    <a href="cart.html">
                      <span className="flaticon-shopping-cart"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- Mobile Menu --> */}
            <div className="col-12">
              <div className="mobile_menu d-block d-lg-none"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

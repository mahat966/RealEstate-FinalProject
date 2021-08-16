import React from "react";
import "./NavBar.component.css";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar_container">
      <nav id="navbar_top" className="navbar navbar-expand-lg navbar-dark ">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#main_nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="main_nav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/home"
                activeClassName="active_navLink"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                activeClassName="active_navLink"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                About Us
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/design"
                activeClassName="active_navLink"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                Houses
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/buyList"
                activeClassName="active_navLink"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                Buy
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/gallery"
                activeClassName="active_navLink"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                activeClassName="active_navLink"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

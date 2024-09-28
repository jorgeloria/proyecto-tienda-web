import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo_primary_color-transparent.png"
import "../styles/Navbar.css"


const Navbar = () => {

  // Toggle mobile navbar menu
  const toggleVisibility = () => {
    let dropdownMenu = document.getElementById("navbar-dropdown-menu")
    if (dropdownMenu.style.display == "none") {
      dropdownMenu.style.display = "block";
    } else {
      dropdownMenu.style.display = "none";
    }
  }

  return (
    <div className="drawer">
      <input id="navbar-mobile-menu" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <div className="navbar flex bg-Footer_color justify-between">
          {/* Category Button (for mobile) */}
          <label htmlFor="navbar-mobile-menu" tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-6 w-6 stroke-current">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </label>
          {/* Navbar Logo */}
          <div className="avatar w-16 mx-5 rounded">
              <img src="/src/images/logo_primary_color-transparent.png" alt=""/>
          </div>
          {/* Navbar Categories */}
          <div className="navbar-categories hidden lg:block w-full mx-10">
            <ul className="menu menu-horizontal flex justify-evenly">
              <li>
                <a className="dropdown dropdown-hover dropdown-bottom dropdown-center">
                  <strong>LAPTOPS</strong>
                  <ul className="dropdown-content menu bg-Footer_color rounded-box w-52">
                    <li><a>Laptops Nuevas</a></li>
                    <li><a>Laptops Usadas</a></li>
                  </ul>
                </a>
              </li>
              <li><a><strong>COMPUTADORAS</strong></a></li>
              <li><a><strong>COMPONENTES</strong></a></li>
              <li><a><strong>PERIFERICOS</strong></a></li>
              <li><a><strong>CELULARES</strong></a></li>
              <li><a><strong>TABLETS</strong></a></li>
              <li><a><strong>ACCESORIOS</strong></a></li>
              <li><a><strong>CONSOLAS</strong></a></li>
            </ul>
          </div>
          <div className="navbar-icons mx-5">
            <div className="w-6 mx-5">
              <img src="/src/images/search.png" alt=""/>
            </div>
            <div className="w-7 mx-5">
              <img src="/src/images/shopping-cart.png" alt=""/>
            </div>
            <div className="w-9 ml-5">
              <img src="/src/images/user.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="navbar-mobile-menu" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-Footer_color min-h-full w-80 p-4 z-auto">
          <li><a>item 1</a></li>
          <li><a>item 2</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;


import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
<div className="navbar bg-Footer_color">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-Footer_color rounded-box z-[1] mt-3 w-52 p-2 shadow [&>*]:p-1">
        <li>
          <details>
            <summary>LAPTOPS</summary>
            <ul className="p-2 [&>*]:p-1">
              <li><a>Laptops Nuevas</a></li>
              <li><a>Laptops Usadas</a></li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>COMPUTADORAS</summary>
            <ul className="p-2 [&>*]:p-1">
              <li><a>Hogar / Oficina</a></li>
              <li><a>Gaming</a></li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>COMPONENTES</summary>
            <ul className="p-2 [&>*]:p-1">
              <li><a>Procesadores</a></li>
              <li><a>Tarjetas Madre</a></li>
              <li><a>RAM</a></li>
              <li><a>Tarjetas Gráficas</a></li>
              <li><a>Almacenamiento</a></li>
              <li><a>Torres</a></li>
              <li><a>PSUs</a></li>
              <li><a>Enfriamiento</a></li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>PERIFÉFICOS</summary>
            <ul className="p-2 [&>*]:p-1">
              <li><a>Teclados</a></li>
              <li><a>Mouse</a></li>
              <li><a>Headset</a></li>
              <li><a>Parlantes</a></li>
              <li><a>Micrófonos</a></li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>CELULARES</summary>
            <ul className="p-2 [&>*]:p-1">
              <li><a>Celulares Nuevos</a></li>
              <li><a>Celulares Usados</a></li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>TABLETS</summary>
            <ul className="p-2 [&>*]:p-1">
              <li><a>Tablets Nuevas</a></li>
              <li><a>Tablets Usadas</a></li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>ACCESORIOS</summary>
            <ul className="p-2 [&>*]:p-1">
              <li><a>Cables</a></li>
              <li><a>Adaptadores</a></li>
              <li><a>Extensiones</a></li>
              <li><a>Redes</a></li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>CONSOLAS</summary>
            <ul className="p-2 [&>*]:p-1">
              <li><a>Consolas Nuevas</a></li>
              <li><a>Consolas Usadas </a></li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
  );
};

export default Navbar;

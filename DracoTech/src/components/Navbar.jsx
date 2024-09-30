import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo_primary_color-transparent.png"
import "../styles/Navbar.css"
import CategoryItem from "./Navbar/CategoryItem";
import SidebarCategoryItem from "./Navbar/SidebarCategoryItem";
import SubCategoryItem from "./Navbar/SubCategoryItem";


const Navbar = () => {
  return (
    <div className="drawer">
      <input id="navbar-mobile-menu" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <div className="navbar flex bg-Footer_color justify-content-between">
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
            <div className="w-16 mx-5 rounded" role="button">
            <Link to="/" className="m-0 p-0">
                <img src="/src/images/logo_primary_color-transparent.png" alt=""/>
            </Link>
            </div>
          {/* Navbar Categories */}
          <div className="navbar-categories lg:block w-full mx-10">
            <ul className="navbar-category-list menu menu-horizontal invisible lg:visible flex lg:justify-evenly">
              <CategoryItem categoryName={"LAPTOPS"} link={"/Category"}
                subCategories={[
                  <SubCategoryItem subCategoryName={"Laptops Nuevas"} />,
                  <SubCategoryItem subCategoryName={"Laptops Usadas"} />
                ]}
              />
              <CategoryItem categoryName={"COMPUTADORAS"} link={"/Category"}
                subCategories={[
                  <SubCategoryItem subCategoryName={"Hogas / Oficina"} />,
                  <SubCategoryItem subCategoryName={"Gaming"} />
                ]}
              />
              <CategoryItem categoryName={"COMPONENTES"} link={"/Category"}
                subCategories={[
                  <SubCategoryItem subCategoryName={"Procesadores"} />,
                  <SubCategoryItem subCategoryName={"Tarjetas Madre"} />,
                  <SubCategoryItem subCategoryName={"RAM"} />,
                  <SubCategoryItem subCategoryName={"Tarjetas Gráficas"} />,
                  <SubCategoryItem subCategoryName={"Almacenamiento"} />,
                  <SubCategoryItem subCategoryName={"Torres"} />,
                  <SubCategoryItem subCategoryName={"PSUs"} />,
                  <SubCategoryItem subCategoryName={"Enfriamiento"} />,
                ]}
              />
              <CategoryItem categoryName={"PERIFERICOS"} link={"/Category"}
                subCategories={[
                  <SubCategoryItem subCategoryName={"Teclados"} />,
                  <SubCategoryItem subCategoryName={"Mouse"} />,
                  <SubCategoryItem subCategoryName={"Headset"} />,
                  <SubCategoryItem subCategoryName={"Parlantes"} />,
                  <SubCategoryItem subCategoryName={"Micrófonos"} />,
                ]}
              />
              <CategoryItem categoryName={"CELULARES"} link={"/Category"}
                subCategories={[
                  <SubCategoryItem subCategoryName={"Celulares Nuevos"} />,
                  <SubCategoryItem subCategoryName={"Celulares Usados"} />,
                ]}
              />
              <CategoryItem categoryName={"TABLETS"} link={"/Category"}
                subCategories={[
                  <SubCategoryItem subCategoryName={"Tablets Nuevas"} />,
                  <SubCategoryItem subCategoryName={"Tablets Usadas"} />,
                ]}
              />
              <CategoryItem categoryName={"ACCESORIOS"} link={"/Category"}
                subCategories={[
                  <SubCategoryItem subCategoryName={"Cables"} />,
                  <SubCategoryItem subCategoryName={"Adaptadores"} />,
                  <SubCategoryItem subCategoryName={"Extensiones"} />,
                  <SubCategoryItem subCategoryName={"Redes"} />,
                ]}
              />
              <CategoryItem categoryName={"CONSOLAS"} link={"/Category"}
                subCategories={[
                  <SubCategoryItem subCategoryName={"Consolas Nuevas"} />,
                  <SubCategoryItem subCategoryName={"Consolas Usadas"} />,
                ]}
              />
            </ul>
          </div>
          {/* Navbar Icons */}
          <div className="navbar-icons mx-5">
            <div className="w-7 mx-4 pt-1 btn-sm btn-ghost btn-square">
                <img src="/src/images/search.png" alt="search icon"/>
            </div>
            <Link to="/ShoppingCart">
              <div className="w-9 mx-4 btn-sm btn-ghost btn-square">
                <img src="/src/images/shopping-cart.png" alt="shopping cart icon"/>
              </div>
            </Link>
            <div className="w-9 ml-4 btn-sm btn-ghost btn-circle">
              <img src="/src/images/user.png" alt="profile icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="navbar-mobile-menu" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-Footer_color min-h-full w-60 p-4">
          <SidebarCategoryItem categoryName={"LAPTOPS"}
            subCategories={[
              <SubCategoryItem subCategoryName={"Laptops Nuevas"}/>,
              <SubCategoryItem subCategoryName={"Laptops Usadas"}/>
            ]}
          />
          <SidebarCategoryItem categoryName={"COMPUTADORAS"}
            subCategories={[
              <SubCategoryItem subCategoryName={"Hogar / Oficina"}/>,
              <SubCategoryItem subCategoryName={"Gaming"}/>,
            ]}
          />
          <SidebarCategoryItem categoryName={"COMPONENTES"}
            subCategories={[
              <SubCategoryItem subCategoryName={"Procesadores"}/>,
              <SubCategoryItem subCategoryName={"Tarjetas Madre"}/>,
              <SubCategoryItem subCategoryName={"RAM"}/>,
              <SubCategoryItem subCategoryName={"Tarjetas Gráficas"}/>,
              <SubCategoryItem subCategoryName={"Almacenamiento"}/>,
              <SubCategoryItem subCategoryName={"Torres"}/>,
              <SubCategoryItem subCategoryName={"PSUs"}/>,
              <SubCategoryItem subCategoryName={"Enfriamiento"}/>,
            ]}
          />
          <SidebarCategoryItem categoryName={"PERIFÉRICOS"}
            subCategories={[
              <SubCategoryItem subCategoryName={"Teclados"}/>,
              <SubCategoryItem subCategoryName={"Mouse"}/>,
              <SubCategoryItem subCategoryName={"Headset"}/>,
              <SubCategoryItem subCategoryName={"Parlantes"}/>,
              <SubCategoryItem subCategoryName={"Micrófonos"}/>,
            ]}
          />
          <SidebarCategoryItem categoryName={"CELULARES"}
            subCategories={[
              <SubCategoryItem subCategoryName={"Celulares Nuevos"}/>,
              <SubCategoryItem subCategoryName={"Celulares Usados"}/>,
            ]}
          />
          <SidebarCategoryItem categoryName={"TABLETS"}
            subCategories={[
              <SubCategoryItem subCategoryName={"Tablets Nuevas"}/>,
              <SubCategoryItem subCategoryName={"Tablets Usadas"}/>,
            ]}
          />
          <SidebarCategoryItem categoryName={"ACCESORIOS"}
            subCategories={[
              <SubCategoryItem subCategoryName={"Cables"}/>,
              <SubCategoryItem subCategoryName={"Adaptadores"}/>,
              <SubCategoryItem subCategoryName={"Accesorios"}/>,
              <SubCategoryItem subCategoryName={"Redes"}/>,
            ]}
          />
          <SidebarCategoryItem categoryName={"CONSOLAS"}
            subCategories={[
              <SubCategoryItem subCategoryName={"Consolas Nuevas"}/>,
              <SubCategoryItem subCategoryName={"Consolas Usadas"}/>,
            ]}
          />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;


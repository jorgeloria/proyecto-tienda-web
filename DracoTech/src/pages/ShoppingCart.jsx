import React from 'react';

import Monitor from "/src/images/Monitor.png"
import ShoppingCartItem from '../components/ShoppingCart/ShoppingCartItem';
import SummaryItem from '../components/ShoppingCart/SummaryItem';

const ShoppingCart = () => {
  return (
  <>
    <div className="shopping-cart-grid grid md:grid-cols-12 2xl:mx-48 lg:mx-16 mt-20 overflow-x-auto">
      <div className="products-section lg:col-span-7 overflow-x-auto">
        <h1 className="header text-4xl my-4">Mi Carrito</h1>
        <table className="table cart-table text-base">
          <thead className="invisible md:visible text-base text-white">
            <tr>
              <th></th> {/*Product Image*/}
              <th>Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
              <th></th> {/*Trash Icon*/}
            </tr>
          </thead>
          <tbody>
            <ShoppingCartItem 
              image={"/src/images/Monitor.png"}
              alt={"Imagen de un monitor"}
              name={"XIAOMI A22I 21.5” - 6MS - 75HZ - 1920X1080"}
              price={"39,900"}
              quantity={3}
              subtotal={"119,700"}
            />
            <ShoppingCartItem 
              image={"/src/images/Headphones.png"}
              alt={"Imagen de unos audífonos"}
              name={"CORSAIR HS80 RGB USB - CARBON"}
              price={"49,500"}
              quantity={2}
              subtotal={"99,000"}
            />
            <ShoppingCartItem 
              image={"/src/images/Console.png"}
              alt={"Imagen de una consola"}
              name={"PLAYSTATION 5 (PS5) SLIM EDICION DISCO"}
              price={"325,000"}
              quantity={1}
              subtotal={"325,000"}
            />
          </tbody>
        </table>
      </div>

      

      <div className="summary-section md:col-span-5 flex grid md:grid-rows-12 mx-10 px-4 bg-Card_color rounded-lg">
        <h1 className='header row-span-2 text-4xl text-center align-center mt-4'>Resumen</h1>
        <table className="table summary-table row-span-6 text-base mx-4">
          <tbody>
            <SummaryItem
              name={"Subtotal"}
              value={"543,700"}
            />
            <SummaryItem
              name={"Envío"}
              value={"6,000"}
            />
            <SummaryItem
              name={"IVA"}
              value={"62,549"}
            />
            <SummaryItem
              name={"Total"}
              value={"549,700"}
            />
          </tbody>
        </table>
        <button className="pay-button row-span-4 w-full h-16 text-xl btn btn-ghost hard-center bg-Tertiary_color">Pagar</button>
      </div>
    </div>
  </>);

  
  
};

export default ShoppingCart;
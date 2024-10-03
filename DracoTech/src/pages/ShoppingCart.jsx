import React from 'react';
import "../styles/ShoppingCart.css"

import Monitor from "/src/images/Monitor.png"
import ShoppingCartItem from '../components/ShoppingCart/ShoppingCartItem';

const ShoppingCart = () => {
  return (
  <>
    <div className="shopping-cart-grid grid md:grid-cols-12 lg:mx-48 mt-20 overflow-x-auto">
      <div className="products-section lg:col-span-7 overflow-x-auto">
        <h1>Mi Carrito</h1>
        <table className="table text-base">
          <thead className="invisible md:visible text-base">
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

      

      <div className="summary-section md:col-span-5">
        <h1>Resumen</h1>
        <table className="table text-base">
          <thead>
            <tr>
              <th></th> {/*Column Name: Subtotal, Envío, IVA, Total*/}
              <th></th> {/*Column Value: Precio*/}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Subtotal</td>
              <td>₡ 543,700</td>
            </tr>
            <tr>
              <td>Envío</td>
              <td>₡ 6,000</td>
            </tr>
            <tr>
              <td>IVA</td>
              <td>₡ 62,549</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>₡ 549,700</td>
            </tr>
          </tbody>
        </table>
        <button className="pay-button btn btn-ghost">Pagar</button>
      </div>
    </div>
  </>);

  
  
};

export default ShoppingCart;
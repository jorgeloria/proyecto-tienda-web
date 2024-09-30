import React from 'react';

import Monitor from "/src/images/Monitor.png"

const ShoppingCart = () => {
  return (
  <>
    <div className="shopping-cart-grid grid grid-cols-2 mx-auto mt-20">
      <div className="products-section">
        <h1>Mi Carrito</h1>
        <table className="table">
          <thead>
            <tr>
              <th></th> {/*Product Image*/}
              <th>Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
              <th></th> {/*Delete Icon*/}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th><img src="/src/images/Monitor.png" alt="" /></th>
              <th>XIAOMI A22I 21.5" - 6MS - 75HZ - 1920X1080</th>
              <th>₡ 39,900</th>
              <th>3</th>
              <th>₡ 119,700</th>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="summary-section">
        <h1>Resumen</h1>
        <table className="table">
          <thead>
            <tr>
              <th></th> {/*Row Name: Subtotal, Envío, IVA, Total*/}
              <th></th> {/*Row Value: Precio*/}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Subtotal</th>
              <th>₡ 543,700</th>
            </tr>
          </tbody>
        </table>
        <button className="pay-button btn btn-ghost">Pagar</button>
      </div>
    </div>
  </>);

  
  
};

export default ShoppingCart;
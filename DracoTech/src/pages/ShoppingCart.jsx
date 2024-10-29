import React, { useId } from 'react';
import "../styles/ShoppingCart.css";
import ShoppingCartItem from '../components/ShoppingCart/ShoppingCartItem';
import SummaryItem from '../components/ShoppingCart/SummaryItem';
import Button from '../components/Button/Button';
import { useCart } from '../hooks/useCart';
import { Link } from 'react-router-dom';

const ShoppingCart = () => {
  const { cart, clearCart } = useCart();
  
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const envio = 6000;
  const iva = subtotal * 0.13;
  const total = subtotal + envio + iva;

  return (
    <>
      <div className="shopping-cart-grid grid md:grid-cols-12 2xl:mx-48 lg:mx-16 mt-20 overflow-x-auto">
        <div className="products-section lg:col-span-7 overflow-x-auto">
          <h1 className="header text-4xl my-4">Mi Carrito</h1>
          <table className="table cart-table text-base">
            <thead className="invisible md:visible text-base text-white">
              <tr>
                <th></th> {/* Imagen del producto */}
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th></th> {/* Ícono de basura */}
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <ShoppingCartItem
                  key={item.id}
                  id={item.id}
                  imageMin={item.imageMin}
                  alt={item.name}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  subtotal={item.price * item.quantity}
                />
              ))}
            </tbody>
          </table>
        </div>
        <div className="summary-section md:col-span-5 grid md:grid-rows-12 mx-10 px-4 bg-Card_color rounded-lg">
          <h1 className='header row-span-2 text-4xl text-center align-center mt-4'>Resumen</h1>
          <table className="table summary-table row-span-6 text-base mx-4">
            <tbody>
              <SummaryItem name={"Subtotal"} value={subtotal.toFixed(2)} />
              <SummaryItem name={"Envío"} value={envio.toFixed(2)} />
              <SummaryItem name={"IVA"} value={iva.toFixed(2)} />
              <SummaryItem name={"Total"} value={total.toFixed(2)} />
            </tbody>
          </table>
          <Link to="/CheckoutPage">
            <Button classNameValue="w-full h-16 text-xl">Pagar</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;

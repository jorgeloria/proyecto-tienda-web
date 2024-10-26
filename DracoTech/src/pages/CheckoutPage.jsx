import React from 'react';
import ItemCheckout from '../components/Checkout/ItemCheckout';
import ShippingInformation from '../components/Checkout/ShippingInformation';
import CardInformation from '../components/Checkout/CardInformation';

import { useCart } from "../hooks/useCart";

const CheckoutPage = () => {

  const { cart, clearCart } = useCart();
  return (
    <div className="min-h-screen bg-BG_color text-white flex justify-center items-center">
      <div className="w-full max-w-5xl p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-Card_color p-6 rounded-lg">
            <h1 className="text-2xl font-semibold mb-4">Dirección de Entrega</h1>
            <ShippingInformation/>
          </div>
          
          <div className="bg-Card_color p-6 rounded-lg">
            <h1 className="text-2xl font-semibold mb-4">Tarjeta</h1>
            <CardInformation/>
          </div>
        </div>
        <div className="bg-Card_color p-6 rounded-lg space-y-6">
          <h1 className="text-2xl font-semibold mb-4 text-center">Tu Pedido</h1>
          <div className="space-y-4">
            {cart.map((item) => (
                <ItemCheckout
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  price={item.price * item.quantity}
                />
              ))}
          </div>
          <button className="btn bg-Tertiary_color hover:bg-Tertiary_color text-white w-full border-none ">
            Pagar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

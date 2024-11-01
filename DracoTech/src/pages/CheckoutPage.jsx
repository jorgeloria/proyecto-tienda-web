import React, { useMemo } from 'react';
import ItemCheckout from '../components/Checkout/ItemCheckout';
import ShippingInformation from '../components/Checkout/ShippingInformation';
import CardInformation from '../components/Checkout/CardInformation';
import SummaryItem from '../components/ShoppingCart/SummaryItem';

import { useCart } from "../hooks/useCart";

import { Link } from 'react-router-dom';


const CheckoutPage = () => {
  const { cart, clearCart } = useCart();
  
  const subtotal = useMemo(() => 
    cart.reduce((acc, item) => acc + item.price * item.quantity, 0), 
    [cart]
  );
  const envio = 6000;

  const iva = subtotal * 0.13;

  const total = subtotal + envio + iva;

  const handleCheckoutPageClick = () => {
    var flag = true
    if(document.getElementById('email').value.trim() ===""){
      flag = false
    }
    if(document.getElementById('Nombre').value.trim() ===""){
      flag = false

    }
    if(document.getElementById('Apellido').value.trim() ===""){
      flag = false
    }
    if(document.getElementById('Direction').value.trim() ===""){
      flag = false
    }
    if(document.getElementById('Provincia').value.trim() ===""){
      flag = false
    }
    if(document.getElementById('Ciudad').value.trim() ===""){
      flag = false
    }
    if(document.getElementById('Region').value.trim() ===""){
      flag = false
    }
    if(document.getElementById('Telefono').value.trim() ===""){
      flag = false
    }
    if(document.getElementById('numCard').value.trim() ===""){
      flag = false
    }
    if(document.getElementById('expi').value.trim() ===""){
      flag = false
    }
    if(document.getElementById('cvv').value.trim() ===""){
      flag = false
    }
    if(document.getElementById('nameCard').value.trim() ===""){
      flag = false
    }
    if(flag){
      document.getElementById('FinCompra').showModal()
    }
  };

  return (
    <div className="min-h-screen bg-BG_color text-white flex justify-center items-center">
      <div className="w-full max-w-5xl p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-Card_color p-6 rounded-lg">
            <h1 className="text-2xl font-semibold mb-4">Dirección de Entrega</h1>
            <ShippingInformation />
          </div>
          
          <div className="bg-Card_color p-6 rounded-lg">
            <h1 className="text-2xl font-semibold mb-4">Tarjeta</h1>
            <CardInformation />
          </div>
        </div>
        
        <div className="bg-Card_color p-6 rounded-lg space-y-6">
          <h1 className="text-2xl font-semibold mb-4 text-center">Tu Pedido</h1>
          <div className="space-y-4">
            {cart.map((item) => (
              <ItemCheckout
                key={item.id}
                imageMin={item.imageMin}
                name={item.name}
                price={item.price * item.quantity}
              />
            ))}
          </div>
          <table className="table summary-table row-span-6 text-base ">
            <tbody>
              <SummaryItem name={"Subtotal"} value={subtotal} />
              <SummaryItem name={"Envío"} value={envio} />
              <SummaryItem name={"IVA"} value={iva} />
              <SummaryItem name={"Total"} value={total} />
            </tbody>
          </table>
          <button className="btn bg-Tertiary_color hover:bg-Tertiary_color text-white w-full border-none "
          onClick={handleCheckoutPageClick}>
            Pagar
          </button>
          <dialog id="FinCompra" className="modal">
            <div className="modal-box">
              <h1 className="font-bold text-lg">Compra finalizada</h1>
              <p className="py-4">La compra se completo con exito</p>
              <div className="modal-action">
                <form method="dialog">
                <Link to="/">
                <button className="btn" onClick={() => clearCart()}>Continuar</button>
                </Link>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

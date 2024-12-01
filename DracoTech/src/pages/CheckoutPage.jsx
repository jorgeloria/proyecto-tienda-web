import React, { useMemo, useState } from 'react';
import ItemCheckout from '../components/Checkout/ItemCheckout';
import ShippingInformation from '../components/Checkout/ShippingInformation';
import CardInformation from '../components/Checkout/CardInformation';
import SummaryItem from '../components/ShoppingCart/SummaryItem';
import {
  verifyEmpty,
  verifyEmail,
  verifyPhone,
  verifyCardNumber,
  verifyCVC,
  verifyExpiryDate
} from '../components/Checkout/CheckoutValidations';

import BillService from '../services/BillService';
import { useCart } from "../hooks/useCart";

import { Link } from 'react-router-dom';


const CheckoutPage = () => {
  const { cart, clearCart } = useCart();
  
  const [ isLoading, setIsLoading ] = useState(false)

  const [shippingData, setShippingData] = useState({
    email: "",
    name: "",
    lastName: "",
    address: "",
    province: "",
    city: "",
    region: "",
    phone: "",
  })

  const [cardData, setCardData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvc: "",
    cardName: "",
  })

  const [shippingDataErrors, setShippingDataErrors] = useState({
    emailError: "",
    nameError: "",
    lastNameError: "",
    addressError: "",
    provinceError: "",
    cityError: "",
    regionError: "",
    phoneError: "",
  })

  const [cardDataErrors, setCardDataErrors] = useState({
    cardNumberError: "",
    expiryDateError: "",
    cvcError: "",
    cardNameError: "",
  })
  
  const subtotal = useMemo(() => 
    cart.reduce((acc, item) => acc + item.price * item.quantity, 0), 
    [cart]
  );
  const envio = 6000;

  const iva = subtotal * 0.13;

  const total = subtotal + envio + iva;

  const verifyInputs = () => {
    const emailError = verifyEmpty(shippingData.email, "Correo Electrónico") || verifyEmail(shippingData.email);
    const nameError = verifyEmpty(shippingData.name, "Nombre");
    const lastNameError = verifyEmpty(shippingData.lastName, "Apellido");
    const addressError = verifyEmpty(shippingData.address, "Dirección");
    const provinceError = verifyEmpty(shippingData.province, "Provincia");
    const cityError = verifyEmpty(shippingData.city, "Ciudad");
    const phoneError = verifyPhone(shippingData.phone);

    const newShippingDataErrors = ({
      emailError: emailError,
      nameError: nameError,
      lastNameError: lastNameError,
      addressError: addressError,
      provinceError: provinceError,
      cityError: cityError,
      regionError: "", // ? delete ?
      phoneError: phoneError,
    })

    setShippingDataErrors(newShippingDataErrors);

    const cardNumberError = verifyEmpty(cardData.cardNumber, "Número de Tarjeta") || verifyCardNumber(cardData.cardNumber);
    const expiryDateError = verifyEmpty(cardData.expiryDate, "Fecha de Vencimiento") || verifyExpiryDate(cardData.expiryDate);
    const cvcError = verifyEmpty(cardData.cvc, "Código de Seguridad") || verifyCVC(cardData.cvc);
    const cardNameError = verifyEmpty(cardData.cardName, "Nombre en la Tarjeta");

    const newCardDataErrors = ({
      cardNumberError: cardNumberError,
      expiryDateError: expiryDateError,
      cvcError: cvcError,
      cardNameError: cardNameError
    })

    setCardDataErrors(newCardDataErrors);

    const isValid = Object.values(newShippingDataErrors).every((error) => error === "")
    && Object.values(newCardDataErrors).every((error) => error === "");

    return isValid;

  }

  const handleCheckoutPageClick = async () => {
    setIsLoading(true);
    if (verifyInputs()) {
      console.log("Data is valid")
      const response = await BillService.processTransaction({
        card: cardData.cardNumber.replaceAll(" ", ""),
        expirationDate: cardData.expiryDate.replaceAll(" ", ""),
        cvc: cardData.cvc,
        currency: "colones"
      })
      if(response.status == 200){
        let products = [];
        cart.map( p => {
          products.push({id: p.id, quantity: p.quantity})
        })
        const shippingDataObject = {
          email: shippingData.email,
          name: shippingData.name,
          lastName: shippingData.lastName,
          direction: shippingData.address,
          province: shippingData.province,
          city: shippingData.city,
          region: shippingData.region,
          phone: shippingData.phone.replaceAll("-","").replaceAll(" ",""),
        }
        const reqObj = { userId: localStorage.getItem("uid"), products: products ,shipData: shippingDataObject };
        const response = await BillService.processPurchase(reqObj)
        if(response == "SUCCESS"){
          document.getElementById('FinCompra').showModal();
        }else{
          //TODO: modal de error
        }
      }
    } else {
      console.log("Data is invalid")
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-BG_color text-white flex justify-center items-center">
      <div className="w-full max-w-5xl p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-Card_color p-6 rounded-lg">
            <h1 className="text-2xl font-semibold mb-4">Dirección de Entrega</h1>
            <ShippingInformation
              shippingData={shippingData}
              setShippingData={setShippingData}
              shippingErrors={shippingDataErrors}
            />
          </div>
          
          <div className="bg-Card_color p-6 rounded-lg">
            <h1 className="text-2xl font-semibold mb-4">Tarjeta</h1>
            <CardInformation
              cardData={cardData}
              setCardData={setCardData}
              cardDataErrors={cardDataErrors}
            />
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
          { !isLoading &&
              <button className="btn bg-Tertiary_color hover:bg-Tertiary_color text-white w-full border-none "
                onClick={handleCheckoutPageClick}>
                Pagar
              </button>
          }
          { isLoading &&
              <img className="loading"/>
          }

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

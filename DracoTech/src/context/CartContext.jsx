import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const productInCartIndex = cart.findIndex(
      (item) => item.id === product.id
    );

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart);
      newCart[productInCartIndex].quantity += 1;
      setCart(newCart);
    } else {
      const updatedCart = [
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ];
      setCart(updatedCart);
    }
  };

  const removeFromCart = (product) => {
    setCart((prevState) => prevState.filter((item) => item.id !== product.id));
  };

  const removeOneFromCart = (product) => {
    const productInCartIndex = cart.findIndex(
      (item) => item.id === product.id
    );

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart);
      newCart[productInCartIndex].quantity -= 1;

      if (newCart[productInCartIndex].quantity === 0) {
        removeFromCart(product);
      } else {
        setCart(newCart);
      }
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
        removeOneFromCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

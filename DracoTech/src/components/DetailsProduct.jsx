import React from "react";
import { useCart } from "../hooks/useCart";

function DetailsProduct({ id, name, imageMin, imageNorm, price, description, stock, details }) {
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    const product = {
      id,
      name,
      imageMin,
      price,
      quantity: 1,
    };

    addToCart(product);
  };

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col md:flex-row bg-Card_color shadow-lg rounded-lg overflow-hidden">
        {/* Imagen del producto */}
        <div className="md:w-1/2">
          <img
            className="w-full h-auto object-cover rounded-lg"
            src={imageNorm}
            alt={name}
          />
        </div>
        <div className="md:w-1/2 p-6">
          <h1 className="text-4xl font-bold text-white mb-2">{name}</h1>
          <h2 className="text-3xl text-white font-bold mb-4">₡ {price.toLocaleString("es-CR")}</h2>

          <div className="text-lg text-Text_color mb-6">
            {description.split("\n").map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>

          {/* Stock */}
          <div className="mb-4">
            {stock === "inStock" ? (
              <span className="text-green-500 font-semibold">En Stock</span>
            ) : (
              <span className="text-red-500 font-semibold">Agotado</span>
            )}
          </div>

          <button
            className="btn bg-Tertiary_color hover:bg-Tertiary_color text-lg text-white w-full  rounded-md shadow-md transition duration-300 ease-in-out"
            onClick={handleAddToCart}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailsProduct;

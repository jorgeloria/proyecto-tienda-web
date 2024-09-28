import React from 'react'

function DetailsProduct({ name, price, description, stock, details }) {
    return (
      <>
        <div className="flex flex-col-reverse md:flex-row items-start justify-center py-10 max-h-full">
          <div className="bg-Card_color rounded-md p-8 mx-4 ">
          <h1 className="text-3xl py-2">{name}</h1>
            <h2 className="text-2xl py-2">₡{price}</h2>
            <p className="text-lg text-Text_color">{description}</p>
            <br />
            <p className="text-lg text-Text_color">{stock}</p>
            <br />
            <p className="text-lg h-full text-Text_color">{details}</p>
            <br />
            <button className="btn bg-Tertiary_color hover:bg-Tertiary_color text-white w-full">
              Agregar al carrito
            </button>
          </div>
          <img
            className=" w-full md:w-1/2 lg:w-1/2 rounded-md mx-4 "
            src="src/assets/66618-producto-video-gpu-asus-rog-strix-geforce-rtx-4070-12gb-gorila-games-10.jpg"
            alt=""
          />
        </div>
      </>
    );
  }

export default DetailsProduct
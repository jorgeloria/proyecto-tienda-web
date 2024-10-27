import React from "react";

export default function ItemCheckout({imageMin, name, price}) {
  return (
    <>
      <div className="flex items-center justify-between">
        <img src={`${imageMin}`} alt={name} className="rounded-md"/>
        <span className="flex-grow ml-4">
          {name}
        </span>
        <span>₡{price}</span>
      </div>
    </>
  );
}

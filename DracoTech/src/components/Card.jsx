import React from "react";

function Card({ name, image, price }) {
  return (
    <div className="card bg-Card_color w-[300px] h-[420px] shadow-xl hover:text-Secundary_color">
      <figure className="px-10 pt-10">
        <img src={`${image}`} alt={name} className="rounded-md" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>₡{price}</p>
      </div>
    </div>
  );
}

export default Card;

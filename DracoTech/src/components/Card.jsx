import React from "react";
import { useNavigate } from "react-router-dom";

function Card({ name, image, price }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/Product");
  };

  return (
    <div
    onClick={handleCardClick}
      className="card rounded-md bg-Card_color w-auto h-auto md:w-[250px] md:h-[355px] shadow-xl hover:text-Secundary_color cursor-pointer"
    >
      <figure className="px-8 pt-4">
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

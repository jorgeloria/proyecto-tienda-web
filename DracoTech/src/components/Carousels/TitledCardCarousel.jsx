import React from "react";

import CardCarousel from "./CardCarousel";

/* //TODO(Fray): Agregar link para la sección */
const TextBox = ({ text }) => {
  return (
    <div className="corusel-title-text-box">
      <h2 className="carousel-title">{text}</h2>
    </div>
  );
};

function TitledCardCarousel({ Title, CardData }) {
  return (
    <div className="titled-card-carousel">
      <TextBox text={Title} />
      <CardCarousel CardData={CardData} />
    </div>
  );
}

export default TitledCardCarousel;

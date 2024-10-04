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

function TitledCardCarousel({ Title, CardData, Link = "" }) {
  return (
    <div className="titled-card-carousel">
      {/*Si se recibión un link, el título será clickeable */}
      {Link.localeCompare("") === 0 ? (
        <TextBox text={Title} />
      ) : (
        <a href={Link}>
          <TextBox text={Title} />
        </a>
      )}
      <CardCarousel CardData={CardData} />
    </div>
  );
}

export default TitledCardCarousel;

import React from "react";

import BannerCarousel from "../components/Carousels/BannerCarousel";
import TitledCardCarousel from "../components/Carousels/TitledCardCarousel";

const CardData = [
  { name: "Card 1", image: "/src/assets/Rtx4047.png", price: 100 },
  { name: "Card 2", image: "/src/assets/Rtx4047.png", price: 10 },
  { name: "Card 3", image: "/src/assets/Rtx4047.png", price: 0 },
  { name: "Card 4", image: "/src/assets/Rtx4047.png", price: 1 },
  { name: "Card 5", image: "/src/assets/Rtx4047.png", price: 10 },
  { name: "Card 6", image: "/src/assets/Rtx4047.png", price: 0 },
  { name: "Card 9", image: "/src/assets/Rtx4047.png", price: 1 },
];

const Home = () => {
  return (
    <div>
      <BannerCarousel></BannerCarousel>
      <TitledCardCarousel CardData={CardData} Title="Ofertas" />
      <TitledCardCarousel CardData={CardData} Title="Productos nuevos" />
    </div>
  );
};

export default Home;

import React from "react";
import CardCarousel from "../components/CardCarousel";

const CardData = [
  { name: "Card 1", image: "https://via.placeholder.com/150", price: 100 },
  { name: "Card 2", image: "https://via.placeholder.com/150", price: 10 },
  { name: "Card 3", image: "https://via.placeholder.com/150", price: 0 },
  { name: "Card 4", image: "https://via.placeholder.com/150", price: 1 },
  { name: "Card 5", image: "https://via.placeholder.com/150", price: 10 },
  { name: "Card 6", image: "https://via.placeholder.com/150", price: 0 },
  { name: "Card 9", image: "https://via.placeholder.com/150", price: 1 },
];

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <CardCarousel CardData={CardData} />
    </div>
  );
};

export default Home;

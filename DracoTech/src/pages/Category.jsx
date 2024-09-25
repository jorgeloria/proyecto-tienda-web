import React from "react";
import Card from "../components/Card";
import Filters from "../components/Filters";

const Category = () => {
  const cardsData = Array(12).fill({
    name: "ROG Strix GeForce RTX 4070 12GB GDDR6X OC Edition",
    image: "src/assets/Rtx4047.png",
    price: "390,000",
  });

  return (
    <div>
      <div className="flex justify-center py-20">
        <div className="block md:flex lg:flex flex-row items-start space-x-8 ">
          <Filters />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-10 ">
            {cardsData.map((card, index) => (
              <Card
                key={index}
                name={card.name}
                image={card.image}
                price={card.price}
                onClick
              />
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Category;

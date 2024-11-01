import React, { useState, useEffect } from "react";

import BannerCarousel from "../components/Carousels/BannerCarousel";
import TitledCardCarousel from "../components/Carousels/TitledCardCarousel";
import BannerAd from "../components/BannerAd";
import ProductService from "../services/ProductService";

const CardData = [
  { name: "Card 1", image: "/src/assets/Rtx4047.png", price: 100 },
  { name: "Card 2", image: "/src/assets/Rtx4047.png", price: 10 },
  { name: "Card 3", image: "/src/assets/Rtx4047.png", price: 0 },
  { name: "Card 4", image: "/src/assets/Rtx4047.png", price: 1 },
  { name: "Card 5", image: "/src/assets/Rtx4047.png", price: 10 },
  { name: "Card 6", image: "/src/assets/Rtx4047.png", price: 0 },
  { name: "Card 9", image: "/src/assets/Rtx4047.png", price: 1 },
];

const BannerAdData = {
  imageSrc: "/src/assets/BannerRTX4060.png",
  imageAlt: "Banner",
};

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await ProductService.getProducts();
        setProducts(data);
      } catch (err) {
        setError("Error al cargar los productos");
        console.error(err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <BannerCarousel />
      <TitledCardCarousel CardData={products} Title="Ofertas" />
      <TitledCardCarousel CardData={products} Title="Productos nuevos" />
      <BannerAd
        imageSrc={BannerAdData.imageSrc}
        imageAlt={BannerAdData.imageAlt}
      />
    </div>
  );
};

export default Home;

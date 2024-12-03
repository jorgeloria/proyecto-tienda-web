import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DetailsProduct from "../components/DetailsProduct";
import ProductService from "../services/ProductService";

const Product = () => {
  const [gottenProduct, setProduct] = useState({});
  const location = useLocation();
  const product = location.state || {};

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await ProductService.getProductById(product.id);
        setProduct(data);
      } catch (err) {
        setError("Error al cargar el producto");
        console.error(err);
      }
    };

    fetchProduct();
  }, []);

  const fallbackData = "failed to fetch product data";
  console.log(gottenProduct);

  return (
    <>
      <DetailsProduct
        id={gottenProduct.id || fallbackData}
        name={gottenProduct.title || fallbackData}
        imageMin={gottenProduct.images || fallbackData}
        imageNorm={gottenProduct.thumbnail || fallbackData}
        price={gottenProduct.price || fallbackData}
        description={gottenProduct.description || fallbackData}
        stock={gottenProduct.stock || fallbackData}
        details={"M" || fallbackData}
      />
    </>
  );
};

export default Product;

import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Filters from "../components/Filters";
import ProductService from "../services/ProductService";
import LoginService from "../services/LoginService";

const Category = () => {
  const [products, setProducts] = useState([]);
  const [filters,] = useState({
    category: "processors",
    minPrice: 0
  });
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await ProductService.getProducts();
        const token = LoginService.getToken();
        console.log(token);
        
        const resp = await LoginService.isActive(token);

        console.log(resp)


        setProducts(data);

      } catch (err) {
        setError("Error al cargar los productos");
        console.error(err);
        console.log("ERROR en categoria");
      }
    };
    fetchProducts();
  }, []);

  const filtersProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };

  return (
    <div>
      <div className="flex justify-center py-20">
        <div className="block md:flex md:flex-row md:items-start md:space-x-6 lg:space-x-8">
          <Filters />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-10">
            {filtersProducts(products).map((product) => (
              <Card
                key={product.id}
                id={product.id}
                name={product.title}
                imageNorm={product.thumbnail}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;

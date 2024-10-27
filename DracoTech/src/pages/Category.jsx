import React, { useState } from "react";
import Card from "../components/Card";
import Filters from "../components/Filters";
import {products as intialProducts} from "../mocks/products.json"

const Category = () => {
const [products] = useState(intialProducts)
const [filters, setFilters] = useState({
  category: 'all',
  minPrice: 0
})
const filtersProducts = (products) => {
  return products.filter(product => {
    return(
      product.price >= filters.minPrice &&
      (
        filters.category === 'all' ||
        product.category === filters.category
      )
    )
  })
}
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
                imageMin={product.images}
                imageNorm={product.thumbnail}
                price={product.price}
                descrip={product.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;

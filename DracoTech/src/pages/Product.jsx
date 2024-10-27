import React from 'react'
import { useLocation } from 'react-router-dom';
import DetailsProduct from '../components/DetailsProduct';

const Product = () => {
  const location = useLocation();
  const product = location.state || {};

  return (
    <>
        <DetailsProduct
          id={product.id}
          name={product.title}
          imageMin={product.imageMin} 
          imageNorm={product.imageNorm}
          price={product.price}
          description={product.descrip} 
          stock={"inStock"} 
          details={"M"}
        />
    </>
    
  );
}

export default Product


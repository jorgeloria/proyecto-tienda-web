import React from 'react'
import { useLocation } from 'react-router-dom';
import DetailsProduct from '../components/DetailsProduct';

const Product = () => {
  const location = useLocation();
  const product = location.state || {};

  return (
    <>
        <DetailsProduct
         name={product.title} 
         price={product.price}
         id={product.id} 
         description={"Descripcion: Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to NVIDIA® GeForce RTX™ 4070 AI Performance 492"} 
         stock={"inStock"} 
         details={"Motor Gráfico NVIDIA® GeForce RTX™ 4070 AI Performance 492 Bus Standard PCI Express 4.0 OpenGL OpenGL®4.6 Memoria de Video 12GB GDDR6X Frecuencia del Reloj OC mode : 2640 MHz Velocidad de Memoria 21 Gbps Memoria de Interface 192-bit Resolución Digital Max Resolution 7680 x 4320 1 x Collection Card1 x Speedsetup Manual1 x Thank you Card"}/>
    </>
    
  );
}

export default Product


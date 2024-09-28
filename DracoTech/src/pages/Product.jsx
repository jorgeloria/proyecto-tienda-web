import React from 'react'
import DetailsProduct from '../components/DetailsProduct';

const Product = () => {
  return (
    <>
        <DetailsProduct
         name={"ROG Strix GeForce RTX 4070 12GB GDDR6X OC Edition"} 
         price={"390,000"} 
         description={"Descripcion: Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to NVIDIA® GeForce RTX™ 4070 AI Performance 492"} 
         stock={"inStock"} 
         details={"Motor Gráfico NVIDIA® GeForce RTX™ 4070 AI Performance 492 Bus Standard PCI Express 4.0 OpenGL OpenGL®4.6 Memoria de Video 12GB GDDR6X Frecuencia del Reloj OC mode : 2640 MHz Velocidad de Memoria 21 Gbps Memoria de Interface 192-bit Resolución Digital Max Resolution 7680 x 4320 1 x Collection Card1 x Speedsetup Manual1 x Thank you Card"}/>
    </>
    
  );
}

export default Product


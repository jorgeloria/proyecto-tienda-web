import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import React from "react";

const BillPage = () => {
  const [gottenBill, setProduct] = useState({});
  const location = useLocation();
  const bill = location.state || {};

  useEffect(() => {});

  return (
    <div className="p-5">
      <div className="flex justify-center pt-10 pb-10">
        <h1 className="text-4xl">Factura</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-around bg-Card_color p-5 rounded-lg shadow-lg">
        <div>
          <p>
            <strong>Correo:</strong> cliente@ejemplo.com
          </p>
          <p>
            <strong>Nombre:</strong> John Doe
          </p>
          <p>
            <strong>Dirección:</strong> Calle 123, Ciudad Y, Provincia X, Región Z
          </p>
          <p>
            <strong>Teléfono:</strong> 123456789
          </p>
        </div>
        <div>
          <p>
            <strong>Fecha:</strong> 27/11/2024
          </p>
          <p>
            <strong>Total:</strong> $250.75
          </p>
        </div>
      </div>
      <div className="mt-10 bg-Card_color p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl mb-4">Productos</h2>
        <table className="table-auto w-full bg-Footer_color rounded-lg">
          <thead className="">
            <tr>
              <th className="p-2 text-left">[Producto]</th>
              <th className="p-2 text-left">Precio</th>
              <th className="p-2 text-left">Cantidad</th>
              <th className="p-2 text-left">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-2">Producto A</td>
              <td className="p-2">$50.25</td>
              <td className="p-2">2</td>
              <td className="p-2">$100.50</td>
            </tr>
            <tr className="border-b">
              <td className="p-2">Producto B</td>
              <td className="p-2">$75.00</td>
              <td className="p-2">1</td>
              <td className="p-2">$75.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BillPage;

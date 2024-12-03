import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import BillService from "../services/BillService";

import React from "react";

const BillPage = () => {
  const [BillData, setBills] = useState({});
  const location = useLocation();
  const billId = location.state || {};

  useEffect(() => {
    console.log(billId.id);
    const fetchBillId = async () => {
      try {
        // TODO: usar id del usuario activo
        const data = await BillService.getBillById(billId.id);
        setBills(data);
        console.log(BillData);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBillId();
  }, []);

  const fallbackData = "failed to fetch product data";
  console.log(BillData);
  return (
    <div className="p-5">
      <div className="flex justify-center pt-10 pb-10">
        <h1 className="text-4xl">Factura</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-around bg-Card_color p-5 rounded-lg shadow-lg">
      <div>
          <p>
            <strong>Correo: </strong> {BillData?.shipData?.email || fallbackData}
          </p>
          <p>
            <strong>Nombre: </strong> 
            {BillData?.shipData?.name || fallbackData}{' '}
            {BillData?.shipData?.lastName || fallbackData}
          </p>
          <p>
            <strong>Dirección:</strong>{' '}
            {BillData?.shipData?.direction || fallbackData},{' '}
            {BillData?.shipData?.city || fallbackData},{' '}
            {BillData?.shipData?.province || fallbackData},{' '}
            {BillData?.shipData?.region || fallbackData}
          </p>
          <p>
            <strong>Teléfono:</strong>{' '}
            {BillData?.shipData?.phone || fallbackData}
          </p>
      </div>
        <div>
          <p>
            <strong>Fecha:</strong> {BillData?.date ? new Date(BillData.date)
            .toLocaleDateString('es-CR', { day: '2-digit', month: '2-digit', 
            year: 'numeric' }) : fallbackData}
          </p>
          <p>
            <strong>Total:</strong> {BillData?.total ? Number(BillData.total)
            .toLocaleString('es-CR', {style: 'currency', currency: 'CRC' }) : fallbackData}
          </p>
        </div>
      </div>
      <div className="mt-10 bg-Card_color p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl mb-4">Productos</h2>
        <table className="table-auto w-full bg-Footer_color rounded-lg ">
          <thead className="">
            <tr>
							<th className="p-6 text-left">Imagen</th>
              <th className="p-6 text-left">Producto</th>
              <th className="p-6 text-left">Precio</th>
              <th className="p-6 text-left">Cantidad</th>
              <th className="p-6 text-left">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {BillData?.products?.map((compra) => (
              <tr className="" key={compra?.producto?.id}>
								<td className="p-6"><img className="rounded" alt={compra?.producto?.title} src={compra?.producto?.image}></img></td>
                <td className="p-6">{compra?.producto?.title}</td>
                <td className="p-6">{compra?.price.toLocaleString('es-CR', {style: 'currency',currency: 'CRC',})}</td>
                <td className="p-6">{compra?.qty}</td>
                <td className="p-6">{(compra?.qty * compra?.price).toLocaleString('es-CR', {style: 'currency',currency: 'CRC',})}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BillPage;

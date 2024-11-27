import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import styles from "./PurchaseHistoryComponent.module.css";
import BillService from "../../services/BillService";

const PurchaseHistoryComponent = () => {

const navigate = useNavigate();

  const handleClick = (id) => {
    navigate("/BillPage", {
      state: {
        id,
      },
    });
  };

    const [bills, setBills] = useState([]);

    useEffect(() => {
        const fetchBills = async () => {
            try {
                // TODO: usar id del usuario activo
                const data = await BillService.getBills(1);
                setBills(data);
            } catch (err) {
                console.error(err);
                //setError("Error al cargar las facturas");
            }
        };

        fetchBills();
    }, []);

    console.log(bills);

    return (
        <div >
            <div className="grid grid-cols-1">
                <div className="flex justify-center pt-10 pb-10">
                    <h1 className= "text-4xl">Historial de compras</h1>
                </div>
            </div>
            <div className="flex justify-center pb-10">
                <div className="overflow-x-auto">
                    <table className="table bg-Footer_color">
                        <thead>
                            <tr>
                                <th># de Factura</th>
                                <th>Fecha</th>
                                <th>Monto</th>
                                <th>Detalles</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bills.map((compra) => (
                                <tr key={compra.id}>
                                    <td>{compra.id}</td>
                                    <td>{compra.date}</td>
                                    <td>{compra.total}</td>
                                    <td>
                                        <button onClick={() => handleClick(compra.id)}> 
                                            <box-icon name='detail' type='solid' color='#ffffff' ></box-icon>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PurchaseHistoryComponent;

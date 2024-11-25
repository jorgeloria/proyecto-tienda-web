import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import styles from "./PurchaseHistoryComponent.module.css"
import BillService from "../../services/BillService";

const PurchaseHistoryComponent = () => {
    const [bills, setBills] = useState({});

    useEffect(() => {
        const fetchBills = async () => {
            try {
                // TODO(importate): usar id del usuario activo
                const data = await BillService.getBills(1);
                setBills(data);
            } catch (err) {
                console.error(err);
                //setError("Error al cargar las facturas");
            }
        };

        fetchBills();
    }, []);

    const fallbackData = "failed to fetch product data";
    console.log(bills);

    const compras = [
        {
            "factura_id" : "KM323423423-132",
            "productos"  : [],
            "productos_desc" : "XIAOMI A22I 21.5” - 6MS - 75HZ - 1920X1080",
            "monto": "₡339,000",
            "cantidad": "2",
            "impuesto": "₡50,000"
        },
        {
            "factura_id" : "XP8548881-51555",
            "productos"  : [],
            "productos_desc" : "CORSAIR HS80 RGB USB - CARBON",
            "monto": "₡449,500",
            "cantidad": "2",
            "impuesto": "₡80,000"
        },
        {
            "factura_id" : "LJ96589-6112",
            "productos"  : [],
            "productos_desc" : "PLAYSTATION 5 (PS5) SLIM EDICION DISCO",
            "monto": "₡325,500",
            "cantidad": "2",
            "impuesto": "₡70,000"
        },
    ];

    return (
        <div className={styles.purchaseHistoryMain} >

        <div className="grid grid-cols-1" >
            <div className="row" >
                <h1 className={styles.purchaseHistoryHead} >Historial de compras</h1>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2" >
            <div className="row">
                <table className="table">
                    <thead>
                        <tr>
                            <th># de Factura</th>
                            <th>Productos</th>
                            <th>Monto</th>
                            <th>Cantidad</th>
                            <th>Impuesto</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bills.map((compra) => {
                            return (<tr key={compra.id}>
                                        <td>{compra.id}</td>
                                        <td>{compra.date}</td>
                                        <td>{compra.total}</td>
                                        <td>{compra.userId}</td>
                                        <td>{compra.id}</td>
                                    </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    );
}

export default PurchaseHistoryComponent;
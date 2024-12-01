import { Request, Response } from "express";
import { DataAccess } from "../access/dataAccess";

export class BillController {
    private dataAccess = new DataAccess();
    
    public async getBills(req: Request, res: Response) {
        // TODO(importante): revisar que coincida al frente
        const id = Number(req.query.userId);
        try {
			const bills = await this.dataAccess.getBillsFromUser(id);
			return res.status(200).json(bills);
		} catch (error) {
			return res.status(500).json({
				message: "Internal Server Error",
			});
		}
    }

    public async getBillById(req: Request, res: Response) {
        // TODO(importante): revisar que coincida al frente
        const id = Number(req.query.billId);
        try {
			const bills = await this.dataAccess.getBillById(id);
			return res.status(200).json(bills);
		} catch (error) {
			return res.status(500).json({
				message: "Internal Server Error",
			});
		}
    }

    public async processPurchase(req: Request, res: Response) {
        try {

            const { userId, products, shipData } = req.body;

            if (! userId || !products || !shipData ) {
                return res.status(400).json({
                    message: "Bad Request: Missing data",
                });
            }
            
            const billId = await this.dataAccess.addBill(userId, products, shipData);
            
            return res.status(200).json({
                billId: billId,
            });

        }

        catch (error) {
            const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
            //console.log("[User Controller]" + errorMessage);
            // TODO(opcional): determinar si se hará manejo de errores específicos


            return res.status(500).json({
                message: "Internal Server Error",
            });
        }
    }
}
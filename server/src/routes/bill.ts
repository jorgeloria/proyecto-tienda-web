import { Request, Response, Router } from "express";
import { BillController } from "../controllers/bill";
import { Bill } from "../class/bill";

export const BillRouter = Router();
const billController = new BillController();

BillRouter.get("/getBills", (req: Request, res: Response) => {
    billController.getBills(req, res);
});

BillRouter.get("/getBillById", (req: Request, res: Response) => {
    billController.getBillById(req, res);
});

BillRouter.post("/processPurchase", (req: Request, res: Response)=>{
    billController.processPurchase(req,res);
});
import express, { Request, Response } from "express";
import bodyParser from "body-parser";

// Type definitions
interface Transaction {
  card: string;
  expirationDate: string;
  cvc: string;
  currency: string;
}

interface ResponsePayload {
  approved: boolean;
  message: string;
}

// List of valid BINs
const BankBINs = [
  "400943",
  "401630",
  "401631",
  "401632",
  "510714",
  "504627",
  "510209",
  "510980",
  "377713",
  "377712",
  "377711"
]; // Example of valid BINs

// Validation functions
const validateBIN = (bin: string): boolean => BankBINs.includes(bin);

const validateExpirationDate = (date: string): boolean => {
  const [month, year] = date.split("/").map(Number);
  if (isNaN(month) || isNaN(year) || month < 1 || month > 12) {
    throw new Error("Invalid expiration date, it should be MM/YY");
  }
  const now = new Date();
  const expiration = new Date(year + 2000, month - 1);
  if (expiration <= now) {
    throw new Error("The card has expired or expires this month");
  }
  return true;
};

const validateCVC = (cvc: string, card: string): boolean => {
  const isAmex = card.startsWith("3");
  const validLength = isAmex ? 4 : 3;
  if (cvc.length !== validLength || isNaN(Number(cvc))) {
    throw new Error(
      `Invalid CVC, it should be ${validLength} digits for ${
        isAmex ? "American Express" : "Visa or MasterCard"
      }`
    );
  }
  return true;
};

const validateCurrency = (currency: string): boolean => {
  if (currency !== "colones" && currency !== "dollars") {
    throw new Error("Invalid currency, it should be 'colones' or 'dollars'");
  }
  return true;
};

// Process the transaction
const processTransaction = (tx: Transaction): ResponsePayload => {
  if (tx.card.length !== 16) {
    throw new Error("The card number must have 16 digits");
  }

  const bin = tx.card.slice(0, 6);
  if (!validateBIN(bin)) {
    throw new Error("The card BIN is invalid");
  }

  validateExpirationDate(tx.expirationDate);
  validateCVC(tx.cvc, tx.card);
  validateCurrency(tx.currency);

  return {
    approved: true,
    message: "Transaction approved",
  };
};

// Server setup
const cors = require('cors')
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Endpoint to process transactions
app.post("/transaction", (req: Request, res: Response) => {
  console.log("Transaction!")
  try {
    console.log(req.body)
    const tx: Transaction = req.body.transaction;
    const response = processTransaction(tx);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(400).json({
      approved: false,
      message: error.message,
    });
    console.log("Error: " + error)
  }
});

// Start the server
const PORT = 8484;
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});

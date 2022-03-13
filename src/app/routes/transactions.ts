import { Router } from "express";
import {
	getTransaction,
	gettransactionByDate,
} from "../controllers/transactions.controllers";

const router = Router();

/* ---- Private Routes ---- */

router.get("/transactionByUser", getTransaction);

router.get("/transactionByAdmin", gettransactionByDate);

export default router;

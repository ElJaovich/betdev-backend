import { Router } from "express";
import {
	getBetByUser,
	getBetByUserId,
	getOdd,
	insertBetOption,
} from "../controllers/bets.controllers";

const router = Router();

/* ---- Private Routes ---- */

router.get("/betByUser", getBetByUser);

router.get("/betByUser:id", getBetByUserId);

router.get("/odd:id", getOdd);

router.post("/betOption", insertBetOption);

export default router;

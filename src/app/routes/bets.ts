import { Router } from "express";
import {
	getBetByUser,
	getBetByUserId,
	getOdd,
	insertBetOption,
} from "../controllers/bets.controllers";

import { insertBetValidator } from "../validators/betsValidator";

const router = Router();

/* ---- Private Routes ---- */

router.get("/betByUser", getBetByUser);

router.get("/betByUser/:id", getBetByUserId);

router.get("/odd/:id", getOdd);

router.post("/bet/option", insertBetValidator, insertBetOption);

export default router;

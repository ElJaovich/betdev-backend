import { Router } from "express";
import {
	getBet,
	getBetById,
	createBet,
	updateBet,
	// updateBetOption,
	finishBet,
	deleteBet,
} from "../controllers/betsAdmin.controllers";

import {
	betValidator,
	finishBetValidator,
} from "../validators/betsAdminValidator";

const router = Router();

/* ---- Private Routes ---- */

router.get("/admin/bet", getBet);

router.get("/admin/bet/:id", getBetById);

router.post("/admin/bet", betValidator, createBet);

router.put("/admin/bet/:id", betValidator, updateBet);

router.put("/admin/finish/bet/:id", finishBetValidator, finishBet);

router.delete("/admin/bet/:id", deleteBet);

export default router;

import { Router } from "express";
import {
	getBet,
	getBetById,
	createBet,
	updateBet,
	deleteBet,
} from "../controllers/betsAdmin.controllers";

const router = Router();

/* ---- Private Routes ---- */

router.get("/admin/bet", getBet);

router.get("/admin/bet/:id", getBetById);

router.post("/admin/bet", createBet);

router.put("/admin/bet:id", updateBet);

router.delete("/admin/bet:id", deleteBet);

export default router;

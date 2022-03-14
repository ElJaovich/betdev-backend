import { Router } from "express";
import { deposit, withdraw } from "../controllers/funds.controllers";

const router = Router();

/* ---- Private Routes ---- */

router.post("/deposit", deposit);

router.post("/withdraw", withdraw);

export default router;

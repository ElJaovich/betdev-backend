import { Router } from "express";
import { login, register, forgotPassword, logout } from "../controllers/auth.controllers";
const router = Router();

/* ---- Public Routes ---- */

router.post("/login", login);

router.post("/register", register)

router.put("/forgotPassword", forgotPassword)

/* ---- Private Routes ---- */
router.put("/logout", logout)



export default router;

import { Router } from "express";
import {
	login,
	register,
	verifyUser,
	forgotPassword,
	logout,
} from "../controllers/auth.controllers";
import { loginValidator } from "../validators/authValidator"

const router = Router();

/* ---- Public Routes ---- */

router.post("/login", loginValidator, login);

router.post("/register", register);

router.post("/verifyUser", verifyUser);

router.put("/forgotPassword", forgotPassword);

/* ---- Private Routes ---- */
router.put("/logout", logout);

export default router;

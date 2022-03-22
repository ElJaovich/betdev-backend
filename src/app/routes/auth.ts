import { Router } from "express";
import {
	login,
	register,
	verifyUser,
	verifyQuestions,
	resetPassword,
	logout,
} from "../controllers/auth.controllers";
import {
	loginValidator,
	registerValidator,
	verifyUserValidator,
	verifyQuestionsValidator,
	resetPasswordValidator,
} from "../validators/authValidator";

const router = Router();

/* ---- Public Routes ---- */

router.post("/login", loginValidator, login);

router.post("/register", registerValidator, register);

router.post("/verify/user", verifyUserValidator, verifyUser);

router.post("/verify/questions/:id", verifyQuestionsValidator, verifyQuestions);

router.put("/reset/password/:id", resetPasswordValidator, resetPassword);

/* ---- Private Routes ---- */
router.put("/logout", logout);

export default router;

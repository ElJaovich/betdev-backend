import { Router } from "express";
import {
	getUser,
	getUserById,
	getSession,
	updateUser,
	updatePassword,
	deleteSession,
} from "../controllers/users.controllers";

const router = Router()

/* ---- Private Routes ---- */

router.get("/user", getUser);

router.get("/user/:id", getUserById);

router.get("/sessions", getSession);

router.put("/updateUser/:id", updateUser);

router.put("/updatePassword/:id", updatePassword);

router.delete("/deleteSession/:id", deleteSession);

export default router

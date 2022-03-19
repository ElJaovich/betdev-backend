import { Router } from "express";
import {
	getUsers,
	getUserById,
	getSession,
	updateUser,
	updatePassword,
	deleteSession,
	createUser
} from "../controllers/users.controllers";

const router = Router();

/* ---- Private Routes ---- */

router.get("/user", getUsers);

router.post("/user",createUser);

router.get("/user/:id", getUserById);

router.get("/sessions", getSession);

router.put("/updateUser/:id", updateUser);

router.put("/updatePassword/:id", updatePassword);

router.delete("/deleteSession/:id", deleteSession);

export default router;

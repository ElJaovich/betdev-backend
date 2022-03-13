import { Router } from 'express';
import { login } from "../controllers/log.controller"
const router = Router();

router.get("/", login)

export default router
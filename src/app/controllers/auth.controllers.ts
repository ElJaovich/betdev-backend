import { pool } from "../../const/database";
import handleError from "../helpers/handleError";
import { Request, Response } from "express";
import { QueryResult } from "pg";

const login = async (req: Request, res: Response) => {
	try {
		// const response: QueryResult = await pool.query(`select * from "userBets"`);
		const { email, password } = req.body;
		res.status(200).json({ email, password });
	} catch (e) {
		handleError(res, e);
	}
};

const register = async (req: Request, res: Response) => {
	try {
		const {
			role,
			name,
			password,
			email,
			birthDate,
			firstQuestion,
			firstResponse,
			secondQuestion,
			secondResponse,
		} = req.body;

		res.status(200).json({
			role,
			name,
			password,
			email,
			birthDate,
			firstQuestion,
			firstResponse,
			secondQuestion,
			secondResponse,
		});
	} catch (e) {
		handleError(res, e);
	}
};

const verifyUser = async (req: Request, res: Response) => {
	try {
		const {
			email,
			firstQuestion,
			firstResponse,
			secondQuestion,
			secondResponse,
		} = req.body;
		res.status(200).send({
			email,
			firstQuestion,
			firstResponse,
			secondQuestion,
			secondResponse,
		});
	} catch (e) {
		handleError(res, e);
	}
};

const forgotPassword = async (req: Request, res: Response) => {
	try {
		const { password } = req.body;
		res.status(200).send({ password });
	} catch (e) {
		handleError(res, e);
	}
};

const logout = async (req: Request, res: Response) => {
	try {
		res.status(200).send("Hola");
	} catch (e) {
		handleError(res, e);
	}
};

export { login, register, verifyUser, forgotPassword, logout };

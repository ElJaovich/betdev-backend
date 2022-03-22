import { pool } from "../../const/database";
import handleError from "../helpers/handleError";
import { Request, Response } from "express";
import { QueryResult } from "pg";
import { expresions } from "../../const/expReg";

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
		const { email } = req.body;
		res.status(200).send({
			email, // responde id, firtsQuestion, secondQuestion
		});
	} catch (e) {
		handleError(res, e);
	}
};

const verifyQuestions = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;

		//Verify Id
		if (!expresions.uuid.test(id)) {
			return res
				.status(403)
				.send({ code: "43097", details: "Invalid Id" });
		}

		const { firstResponse, secondResponse } = req.body;
		res.status(200).send({
			firstResponse,
			secondResponse, // responde estado 200 y un mensaje de succesfully
		});
	} catch (e) {
		handleError(res, e);
	}
};

const resetPassword = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;

		//Verify Id
		if (!expresions.uuid.test(id)) {
			return res
				.status(403)
				.send({ code: "43097", details: "Invalid Id" });
		}

		const { password } = req.body;
		res.status(200).send({ password }); //Responde succesfully
	} catch (e) {
		handleError(res, e);
	}
};

const logout = async (req: Request, res: Response) => {
	try {
		res.status(200).send({ message: "Hola" });
	} catch (e) {
		handleError(res, e);
	}
};

export { login, register, verifyUser, verifyQuestions, resetPassword, logout };

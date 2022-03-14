import { pool } from "../../const/database";
import handleError from "../helpers/handleError";
import { Request, Response } from "express";
import { QueryResult } from "pg";

const getUser = async (req: Request, res: Response) => {
	try {
		const response: QueryResult = await pool.query("select * from users");
		res.status(200).json(response.rows);
	} catch (e) {
		handleError(res, e);
	}
};

const getUserById = async (req: Request, res: Response) => {
	try {
		res.status(200).send("Hola");
	} catch (e) {
		handleError(res, e);
	}
};

const getSession = async (req: Request, res: Response) => {
	try {
		res.status(200).send("Hola");
	} catch (e) {
		handleError(res, e);
	}
};

const updateUser = async (req: Request, res: Response) => {
	try {
		res.status(200).send("Hola");
	} catch (e) {
		handleError(res, e);
	}
};

const updatePassword = async (req: Request, res: Response) => {
	try {
		res.status(200).send("Hola");
	} catch (e) {
		handleError(res, e);
	}
};

const deleteSession = async (req: Request, res: Response) => {
	try {
		res.status(200).send("Hola");
	} catch (e) {
		handleError(res, e);
	}
};

export {
	getUser,
	getUserById,
	getSession,
	updateUser,
	updatePassword,
	deleteSession,
};

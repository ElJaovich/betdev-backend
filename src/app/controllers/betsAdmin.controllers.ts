import { pool } from "../../const/database";
import handleError from "../helpers/handleError";
import { Request, Response } from "express";
import { QueryResult } from "pg";

const getBet = async (req: Request, res: Response) => {
	try {
		const response: QueryResult = await pool.query("select * from users");
		res.status(200).json(response.rows);
	} catch (e) {
		handleError(res, e);
	}
};

const getBetById = async (req: Request, res: Response) => {
	try {
		res.status(200).send("Hola");
	} catch (e) {
		handleError(res, e);
	}
};

const createBet = async (req: Request, res: Response) => {
	try {
		res.status(200).send("Hola");
	} catch (e) {
		handleError(res, e);
	}
};

const updateBet = async (req: Request, res: Response) => {
	try {
		res.status(200).send("Hola");
	} catch (e) {
		handleError(res, e);
	}
};

const deleteBet = async (req: Request, res: Response) => {
	try {
		res.status(200).send("Hola");
	} catch (e) {
		handleError(res, e);
	}
};

export { getBet, getBetById, createBet, updateBet, deleteBet };

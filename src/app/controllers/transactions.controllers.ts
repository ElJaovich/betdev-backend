import { pool } from "../../const/database";
import handleError from "../helpers/handleError";
import { Request, Response } from "express";
import { QueryResult } from "pg";

const getTransaction = async (req: Request, res: Response) => {
	try {
		const response: QueryResult = await pool.query("select * from users");
		res.status(200).json(response.rows);
	} catch (e) {
		handleError(res, e);
	}
};

const gettransactionByDate = async (req: Request, res: Response) => {
	try {
		res.status(200).send("Hola");
	} catch (e) {
		handleError(res, e);
	}
};

export { getTransaction, gettransactionByDate };

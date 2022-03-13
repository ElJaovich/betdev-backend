import { pool } from "../../const/database"
import { Router, Request, Response } from 'express';
import { QueryResult } from 'pg';

const login = async (req: Request, res: Response) => {
	try {
		const response: QueryResult = await pool.query("select * from users")
		res.status(200).json(response.rows)
	} catch (e) {
		console.log(e)
	}
}

export { login }
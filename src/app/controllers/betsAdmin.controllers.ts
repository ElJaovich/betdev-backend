import { pool } from "../../const/database";
import handleError from "../helpers/handleError";
import { Request, Response } from "express";
import { QueryResult } from "pg";
import { expresions } from "../../const/expReg";

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
		const { id } = req.params;

		//Verify Id
		if (!expresions.uuid.test(id)) {
			return res
				.status(403)
				.send({ code: "43097", details: "Invalid Id" });
		}

		res.status(200).send({ mesagge: "Hola" });
	} catch (e) {
		handleError(res, e);
	}
};

const createBet = async (req: Request, res: Response) => {
	try {
		const { sport, nameEvent, options } = req.body;
		const statusEvent = "active";
		res.status(200).send({
			sport,
			nameEvent,
			statusEvent,
			options,
		});
	} catch (e) {
		handleError(res, e);
	}
};

const updateBet = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;

		//Verify Id
		if (!expresions.uuid.test(id)) {
			return res
				.status(403)
				.send({ code: "43097", details: "Invalid Id" });
		}
		const { sport, nameEvent, options } = req.body;

		res.status(200).send({
			sport,
			nameEvent,
			options, //contiene id, bet_option, name_option
		});
	} catch (e) {
		handleError(res, e);
	}
};

const finishBet = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const { options } = req.body;
		const state = "cerrada";

		interface opt {
			id: string;
			result: string;
		}

		//Verify Id
		if (!expresions.uuid.test(id)) {
			return res
				.status(403)
				.send({ code: "43097", details: "Invalid Id" });
		}

		//verify there is only one winner
		const winner = options.filter((option: opt) => option.result === "won");
		if (winner.length != 1) {
			return res
				.status(403)
				.send({ code: "43097", details: "only owe a winning result" });
		}

		res.status(200).send({
			state,
			options, //contiene id, result
		});
		// Buscar en la tabla de user_bets por options.id (bet_id) el monto apostado
		// consultar el odd (funcion que se va a construir en helpers) y multiplicarlo por el monto abonad
		// Dependiendo si gano, y registrar las transacciones de los usuarios participantes
	} catch (e) {
		handleError(res, e);
	}
};

const deleteBet = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;

		//Verify Id
		if (!expresions.uuid.test(id)) {
			return res
				.status(403)
				.send({ code: "43097", details: "Invalid Id" });
		}

		res.status(200).send({ mesagge: "Hola" });
	} catch (e) {
		handleError(res, e);
	}
};

export { getBet, getBetById, createBet, updateBet, finishBet, deleteBet };

import { pool } from "../../const/database";
import handleError from "../helpers/handleError";
import { Request, Response } from "express";
import { QueryResult } from "pg";
import { expresions } from "../../const/expReg"

const getBetByUser = async (req: Request, res: Response) => {
	try {
		res.status(200).send({ message: "Hola" });
	} catch (e) {
		handleError(res, e);
	}
};

const getBetByUserId = async (req: Request, res: Response) => {
	try {
		const { id } = req.params

		//Verify Id 
		if(!expresions.uuid.test(id)){
			return res.status(403).send({ code: "43097", details: "Invalid Id" })
		}

		res.status(200).send({ message: "Hola" });
	} catch (e) {
		handleError(res, e);
	}
};

const getOdd = async (req: Request, res: Response) => {
	try {
		const { id } = req.params

		//Verify Id 
		if(!expresions.uuid.test(id)){
			return res.status(403).send({ code: "43097", details: "Invalid Id" })
		}
		
		res.status(200).send({ message: "Hola" });
	} catch (e) {
		handleError(res, e);
	}
};

const insertBetOption = async (req: Request, res: Response) => {
	try {
		const { userId, betId, amountBet } = req.body;
		res.status(200).send({
			userId,
			betId,
			amountBet,
		});
	} catch (e) {
		handleError(res, e);
	}
};

export { getBetByUser, getBetByUserId, getOdd, insertBetOption };

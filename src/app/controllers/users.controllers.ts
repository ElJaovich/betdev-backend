import { pool } from "../../const/database";
import handleError from "../helpers/handleError";
import { Request, Response } from "express";
import { DatabaseError, QueryResult } from "pg";

const getUsers = async (req: Request, res: Response) => {
	try {

		const response: QueryResult = await pool.query("select * from users;");
		res.status(200).json(response);
		
	} catch (e) {
		
		handleError(res, e);
	}
};

const createUser = async (req:Request, res: Response) => {
	try {

		console.log(req.query)

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
	  createAtUser,
    } = req.query;
		
		const response=pool.query('INSERT INTO users (id,role,name,password,email,birth_Date,first_Question,first_Response,second_Question,second_Response,created_At_User) VALUES (gen_random_uuid(),$1,$2,$3,$4,$5,$6,$7,$8,$9,now()::date)', [role,name,password,email,birthDate,firstQuestion,firstResponse,secondQuestion,secondResponse])

		res.send("user created");
		
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
	getUsers,
	getUserById,
	getSession,
	updateUser,
	updatePassword,
	deleteSession,
	createUser,
};

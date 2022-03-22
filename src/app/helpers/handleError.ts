import { Response } from "express";

const handleError = (res: Response, error: any) => {
	console.log(error)
	res.status(500).send(error);
};

export default handleError;

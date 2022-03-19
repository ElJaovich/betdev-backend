import { validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

const validateResult = (req: Request, res: Response, next: NextFunction) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(403).send({
			code: "43097",
			details: errors.array({ onlyFirstError: true }),
		});
	}
	return next();
};

export { validateResult };

import { check } from "express-validator";
import { validateResult } from "../helpers/validateResult";
import { Request, Response, NextFunction } from "express";

const loginValidator = [
    check("email").exists().isEmail(),
    check("password").exists().isString().notEmpty(),
    (req: Request, res: Response, next: NextFunction) => {
        validateResult(req, res, next);
    },
];

export { loginValidator };

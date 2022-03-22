import { check } from "express-validator";
import { validateResult } from "../helpers/validateResult";
import { Request, Response, NextFunction } from "express";
import { expresions } from "../../const/expReg";

const insertBetValidator = [
    check("userId")
        .exists()
        .isString()
        .custom((value: string) => {
            if (!expresions.uuid.test(value)) {
                throw new Error("Invalid Value");
            }
            return true;
        }),
    check("betId")
        .exists()
        .isString()
        .custom((value: string) => {
            if (!expresions.uuid.test(value)) {
                throw new Error("Invalid Value");
            }
            return true;
        }),
    check("amountBet")
        .exists()
        .isFloat()
        .notEmpty(),
    (req: Request, res: Response, next: NextFunction) => {
        validateResult(req, res, next);
    },
];

export { insertBetValidator };

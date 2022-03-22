import { check } from "express-validator";
import { validateResult } from "../helpers/validateResult";
import { Request, Response, NextFunction } from "express";
import { expresions } from "../../const/expReg";

const betValidator = [
    check("sport")
        .exists()
        .isString()
        .custom((value: string) => {
            if (!expresions.name.test(value)) {
                throw new Error("Invalid Value");
            }
            return true;
        })
        .notEmpty(),
    check("nameEvent")
        .exists()
        .isString()
        .custom((value: string) => {
            if (!expresions.nameEvent.test(value)) {
                throw new Error("Invalid Value");
            }
            return true;
        })
        .notEmpty(),
    check("options").exists().isArray().notEmpty(),
    check("options.*.betOption").exists().isInt().notEmpty(),
    check("options.*.nameOption")
        .exists()
        .isString()
        .custom((value: string) => {
            if (!expresions.name.test(value)) {
                throw new Error("Invalid Value");
            }
            return true;
        })
        .notEmpty(),
    (req: Request, res: Response, next: NextFunction) => {
        validateResult(req, res, next);
    },
];

const finishBetValidator = [
    check("options").exists().isArray().notEmpty(),
    check("options.*.id")
        .exists()
        .isString()
        .custom((value: string) => {
            if (!expresions.uuid.test(value)) {
                throw new Error("Invalid Value");
            }
            return true;
        }),
    check("options.*.result")
        .exists()
        .isString()
        .custom((value: string) => {
            if (value === "won" || value === "lost") {
                return true;
            }
            throw new Error("Invalid Value");
        })
        .notEmpty(),
    (req: Request, res: Response, next: NextFunction) => {
        validateResult(req, res, next);
    },
];

export { betValidator, finishBetValidator };

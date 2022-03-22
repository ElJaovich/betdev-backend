import { check } from "express-validator";
import { validateResult } from "../helpers/validateResult";
import { Request, Response, NextFunction } from "express";
import { expresions } from "../../const/expReg";

const loginValidator = [
    check("email").exists().isEmail(),
    check("password").exists().isString().notEmpty(),
    (req: Request, res: Response, next: NextFunction) => {
        validateResult(req, res, next);
    },
];

const registerValidator = [
    check("role")
        .exists()
        .isString()
        .custom((value: string) => {
            if (value === "admin" || value === "user") {
                return true;
            }
            throw new Error("Invalid Value");
        })
        .notEmpty(),
    check("name")
        .exists()
        .isString()
        .custom((value: string) => {
            if (!expresions.name.test(value)) {
                throw new Error("Invalid Value");
            }
            return true;
        })
        .notEmpty(),
    check("email").exists().isEmail().notEmpty(),
    check("password")
        .exists()
        .isString()
        .notEmpty()
        .custom((value: string) => {
            if (!expresions.password.test(value)) {
                throw new Error("Invalid Value");
            }
            return true;
        }),
    check("birthDate").exists().isDate(),
    check("firstQuestion")
        .exists()
        .isString()
        .custom((value: string) => {
            if (!expresions.question.test(value)) {
                throw new Error("Invalid Value");
            }
            return true;
        })
        .notEmpty(),
    check("firstResponse")
        .exists()
        .isString()
        .custom((value: string) => {
            if (!expresions.description.test(value)) {
                throw new Error("Invalid Value");
            }
            return true;
        })
        .notEmpty(),
    check("secondQuestion")
        .exists()
        .isString()
        .custom((value: string) => {
            if (!expresions.question.test(value)) {
                throw new Error("Invalid Value");
            }
            return true;
        })
        .notEmpty(),
    check("secondResponse")
        .exists()
        .isString()
        .custom((value: string) => {
            if (!expresions.description.test(value)) {
                throw new Error("Invalid Value");
            }
            return true;
        })
        .notEmpty(),
    (req: Request, res: Response, next: NextFunction) => {
        validateResult(req, res, next);
    },
];

const verifyUserValidator = [
    check("email").exists().isEmail().notEmpty(),
    (req: Request, res: Response, next: NextFunction) => {
        validateResult(req, res, next);
    },
];

const verifyQuestionsValidator = [
    check("firstResponse")
        .exists()
        .isString()
        .custom((value: string) => {
            if (!expresions.description.test(value)) {
                throw new Error("Invalid Value");
            }
            return true;
        })
        .notEmpty(),
    check("secondResponse")
        .exists()
        .isString()
        .custom((value: string) => {
            if (!expresions.description.test(value)) {
                throw new Error("Invalid Value");
            }
            return true;
        })
        .notEmpty(),
    (req: Request, res: Response, next: NextFunction) => {
        validateResult(req, res, next);
    },
];

const resetPasswordValidator = [
    check("password")
        .exists()
        .isString()
        .notEmpty()
        .custom((value: string) => {
            if (!expresions.password.test(value)) {
                throw new Error("Invalid Value");
            }
            return true;
        }),
    (req: Request, res: Response, next: NextFunction) => {
        validateResult(req, res, next);
    },
];

export {
    loginValidator,
    registerValidator,
    verifyUserValidator,
    verifyQuestionsValidator,
    resetPasswordValidator,
};

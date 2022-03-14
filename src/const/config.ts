import dotenv from "dotenv";
import path from "path";

dotenv.config({
	path: path.resolve(".env" + "." + process.env.NODE_ENV),
});

export default {
	db: {
		user: process.env.DB_USER,
		host: process.env.DB_HOST,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
		port: Number(process.env.DB_PORT),
		ssl: {
			rejectUnauthorized: false,
		},
	},
};

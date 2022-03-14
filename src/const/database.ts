import { Pool } from "pg";
import config from "./config";

let pool: any;

if (!pool) {
	pool = new Pool (config.db);
}

export { pool };

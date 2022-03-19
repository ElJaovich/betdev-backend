import express from "express";
import morgan from "morgan";

// Import Routes
import auth from "./routes/auth";
import bets from "./routes/bets";
import betsAdmin from "./routes/betsAdmin";
import funds from "./routes/funds";
import transactions from "./routes/transactions";
import users from "./routes/users";

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(auth);
app.use(bets);
app.use(betsAdmin);
app.use(funds);
app.use(transactions);
app.use(users);

export default app;

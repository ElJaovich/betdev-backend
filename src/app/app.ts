import express from "express";
import log from "./routes/log"
// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(log)

export default app;
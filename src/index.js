import express from "express";
import { router as musicRouter } from "./Routers/music.js";
import { router as authRouter } from "./routers/auth.js";
import helmet from "helmet";
import "./config/mongoDB.js";

const PORT = process.env.PORT ?? 3000;
const app = express();

app.use(express.json());
app.use(helmet());
// app.disable("x-powered-by");
app.use("/api/v1/music", musicRouter);
app.use("/api/v1/auth", authRouter);

app.get("/", (req, res) => {
	console.log(req);
	res.send("Pedro G. Bello");
});
app.listen(PORT, (error) => {
	error
		? console.log(`Server not running: ${error}`)
		: console.log(`Server up: http://localhost:${PORT} | Ctrl+C to exit.`);
});

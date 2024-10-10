/*
    1. Import express from "express" after installation;
    2. Create server "PORT" as host. If not found, use 3000.
    3. Create server "app" or "server";
    4. Call "get()" when deployed;
    5. Deploy server;
    6. Import MongoDB connection from "src/config/mongoDB.js"
    7. Import router from "/src/routers/music.js" and call "use()" with endpoint;
    8. Call "use()" with express.json();
*/

import express from "express";
import { router as musicRouter } from "./Routers/music.js";
import { router as authRouter } from "./routers/auth.js";
import "./config/mongoDB.js";

const PORT = process.env.PORT ?? 3000;
const app = express();

app.use(express.json());
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

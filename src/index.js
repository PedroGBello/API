/*
    1. Import express from "express" after installation;
    2. Create server "PORT" as host. If not found, use 3000.
    3. Create server "app" or "server";
    4. Call "get()" when deployed;
    5. Deploy server;
    6. Import MongoDB connection from "src/config/mongoDB.js"
*/

import express from "express";

const PORT = process.env.PORT ?? 3000;
const app = express();
app.get("/", (req, res) => {
	console.log(req);
	res.send("Hello, World!");
});
app.listen(PORT, (err) => {
	err
		? console.log(`Server not running: ${err}`)
		: console.log(`Server up: http://localhost:${PORT} | Ctrl+C to exit.`);
});

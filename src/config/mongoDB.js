/*
    1. Import connect from "mongoose" to connect with DB;
    2. Create async "main()" function to connect with DB;
    3. Call the "main()" function;
    4. Import import into "src/index.js";
*/

import { connect } from "mongoose";

async function main() {
	await connect(process.env.MONGO_URI);
	// await connect("mongodb://localhost:27017");
}
// Como es asincrónica, la función devuelve una promesa y con ella se usa "then()".
// Si fuera a haber un error, se lo atrapa con "catch()":
main()
	.then(() => console.log("MongoDB connected on local environment."))
	.catch((error) => console.log(`Database connection failed: ${error.message}`));

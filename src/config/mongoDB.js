import { connect } from "mongoose";

async function main() {
	await connect(process.env.MONGO_URI);
	// await connect("mongodb://localhost:27017");
}
main()
	.then(() => console.log("MongoDB connected on local environment."))
	.catch((error) => console.log(`Database connection failed: ${error.message}`));

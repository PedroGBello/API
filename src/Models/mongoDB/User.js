import { mongoose } from "mongoose";
const UserSchema = new mongoose.Schema(
	{
		fullName: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);
// Manipulando la salida de datos:
UserSchema.set("toJSON", {
	transform(_document, ret) {
		delete ret.password;
	},
});

const User = mongoose.model("User", UserSchema);
export default User;

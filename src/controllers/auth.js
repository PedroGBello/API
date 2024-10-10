import User from "../models/mongoDB/User.js";
import jwt from "jsonwebtoken";
import { hash, compare } from "bcrypt";
const saltRounds = 10;

export const authController = {
	async registerUser(req, res) {
		try {
			const { fullName, email } = req.body;
			const password = await hash(req.body.password, saltRounds);
			const newUser = new User({ fullName, email, password });
			const response = await newUser.save();
			res.status(200).json({
				stauts: 200,
				success: true,
				message: "New user registered.",
				data: response,
			});
		} catch (error) {
			res.status(500).json({
				status: 500,
				success: false,
				message: "Internal Server Error.",
			});
		}
	},
	async login(req, res) {
		try {
			const response = await User.find().where({ email: req.body.email });
			if (!response.length) {
				return res.status(401).json({
					stauts: 401,
					success: false,
					message: "Invalid Email or Password.",
				});
			}
			const isSamePassword = await compare(
				req.body.password,
				response[0].password
			);
			if (!isSamePassword) {
				return res.status(401).json({
					stauts: 401,
					success: false,
					message: "Invalid Email or Password.",
				});
			}
			const userForToken = {
				userName: response[0].fullName,
				sub: response[0].id,
			};
			const accessToken = jwt.sign(userForToken, process.env.JWT_SECRET, {
				expiresIn: "1h",
			});
			res.status(200).json({
				stauts: 200,
				success: true,
				message: "User Authenticated!",
				data: accessToken,
			});
		} catch (error) {
			res.status(500).json({
				status: 500,
				success: false,
				message: "Internal Server Error.",
			});
		}
	},
};

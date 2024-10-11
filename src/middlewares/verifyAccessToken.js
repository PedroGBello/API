import jwt from "jsonwebtoken";
export function verifyAccessToken(req, res, next) {
	const authHeader = req.headers.authorization;
	if (!authHeader) {
		return res.status(401).json({
			status: 401,
			success: false,
			message: "No Access Token provided.",
		});
	}
	const token = authHeader.split(" ").pop();
	jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
		if (error) {
			return res.status(401).json({
				status: 401,
				success: false,
				message: "Invalid or Expired Access Token.",
			});
		}
		req.decoded = decoded;
		next();
	});
}

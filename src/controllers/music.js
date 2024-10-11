import Music from "../Models/mongoDB/Music.js";

export const musicController = {
	// get all resources: ----------------
	async getAll(req, res) {
		try {
			const musicCollection = await Music.find();
			if (!musicCollection.length) {
				return res.status(404).json({
					status: 404,
					success: false,
					message: "Music Database is empty.",
				});
			}
			res.status(200).json({
				status: 200,
				success: true,
				message: "Music Collection:",
				data: musicCollection,
			});
		} catch (error) {
			res.status(500).json({
				status: 500,
				success: false,
				message: "Internal Server Error.",
			});
		}
	},
	// get resources which title contains the query string: ----------------
	async getByTitle(req, res) {
		const { title } = req.query;
		if (!title) {
			return res.status(400).json({
				status: 400,
				success: false,
				message: "Missing 'title' query param.",
			});
		}
		try {
			const music = await Music.find({
				title: { $regex: title, $options: "i" },
			});
			console.log(music);
			if (!music.length) {
				return res.status(404).json({
					status: 404,
					success: false,
					message: `No music found with '${title}' in title.`,
				});
			}
			res.status(200).json({
				status: 200,
				success: true,
				message: "Music by query title.",
				data: music,
			});
		} catch (error) {
			res.status(500).json({
				status: 500,
				success: false,
				message: "Internal Server Error.",
			});
		}
	},
	// create a resource: ----------------
	async createOne(req, res) {
		const { title, artist, album, year, genre, poster, duration } =
			req.body;
		try {
			const newMusic = new Music({
				title,
				artist,
				album,
				year,
				genre,
				poster,
				duration,
			});
			const savedMusic = await newMusic.save();
			res.status(200).json({
				status: 200,
				success: true,
				message: "New Music created!",
				data: savedMusic,
			});
		} catch (error) {
			res.status(500).json({
				status: 500,
				success: false,
				message: "Internal Server Error.",
			});
		}
	},
	// update a resource: ----------------
	async updateOne(req, res) {
		try {
			const updatedMusic = await Music.findByIdAndUpdate(
				req.params.id,
				req.body,
				{ new: true }
			);
			if (!updatedMusic) {
				return res.status(404).json({
					status: 404,
					success: false,
					message: "Update failed. Music not found.",
				});
			}
			res.status(200).json({
				status: 200,
				success: true,
				message: "Music was updated!",
				data: updatedMusic,
			});
		} catch (error) {
			res.status(500).json({
				status: 500,
				success: false,
				message: "Internal Server Error.",
			});
		}
	},
	// delete a resource: ----------------
	async deleteOne(req, res) {
		try {
			const music = await Music.findByIdAndDelete(req.params.id);
			if (!music) {
				return res.status(404).json({
					status: 404,
					success: false,
					message: "Deletion failed. Music not found.",
				});
			}
			res.status(204).end();
		} catch (error) {
			res.status(500).json({
				status: 500,
				success: false,
				message: "Internal Server Error.",
			});
		}
	},
};

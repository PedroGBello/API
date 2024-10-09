/*
    1. Import mongoose from "mongoose" after installation;
    2. Create Schema;
    3. Create MusicSchema;
    4. Index title;
    5. Export Music Model;
*/

import { mongoose } from "mongoose";
const Schema = mongoose.Schema;
const MusicSchema = new Schema(
	{
		title: {
			type: String,
			require: true,
			trim: true,
		},
		artist: {
			type: String,
			require: true,
			trim: true,
		},
		album: {
			type: String,
			require: true,
			trim: true,
		},
		year: {
			type: Number,
			require: true,
		},
		genre: {
			type: [String],
			require: true,
			trim: true,
		},
		poster: {
			type: String,
			require: true,
			trim: true,
		},
		duration: {
			type: Number,
			require: true,
		},
		rating: {
			type: Number,
			require: true,
			min: 0,
			max: 10,
		},
	},
	{ timestamps: true }
);
MusicSchema.index({ title: "text" });

const Music = mongoose.model("Music", MusicSchema);
export default Music;

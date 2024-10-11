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
			required: true,
			trim: true,
		},
		artist: {
			type: String,
			required: true,
			trim: true,
		},
		album: {
			type: String,
			required: true,
			trim: true,
		},
		year: {
			type: Number,
			required: true,
		},
		genre: {
			type: [String],
			required: true,
			trim: true,
		},
		poster: {
			type: String,
			required: true,
			trim: true,
		},
		duration: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true }
);
MusicSchema.index({ title: "text" });

const Music = mongoose.model("Music", MusicSchema);
export default Music;

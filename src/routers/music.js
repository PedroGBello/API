import { Router } from "express";
import { musicController } from "../controllers/music.js";
import { verifyAccessToken } from "../middlewares/verifyAccessToken.js";
export const router = Router();

router.get("/", musicController.getAll);
router.get("/s", musicController.getByTitle);
// router.get("/s", musicController.getByArtist);
// router.get("/s", musicController.getByAlbum);
router.get("/:id", (req, res) => {});
router.post("/", verifyAccessToken, musicController.createOne);
router.patch("/:id", verifyAccessToken, musicController.updateOne);
router.delete("/:id", verifyAccessToken, musicController.deleteOne);

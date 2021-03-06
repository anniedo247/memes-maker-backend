const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload.helper").upload;
const photoHelper = require("../middleware/photo.helper");
const memeController = require("../controllers/meme.controller");
/**
 * @route GET api/memes
 * @description Get all memes
 * @access Public
 */
router.get("/", memeController.getMemes);

/**
 * @route POST api/memes
 * @description Create a new meme
 * @access Public
 */
router.post(
  "/",
  upload.single("image"),
  photoHelper.resize,
  memeController.createMeme
);
/**
 * @route GET api/memes/images
 * @description Get list of original images
 * @access Public
 */
router.get("/images", memeController.getOriginalImages);

module.exports = router;

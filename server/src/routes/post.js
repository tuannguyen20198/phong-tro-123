import express from "express";
import * as postController from "../controller/post";
const router = express.Router();

router.get("/all", postController.getPost);
router.get("/limit", postController.getPostsLimit);
export default router;
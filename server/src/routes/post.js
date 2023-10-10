import express from "express";
import * as postController from "../controller/post";
const router = express.Router();
import verifyToken from "../middlewares/verifyToken"

router.get("/all", postController.getPost);
router.get("/limit", postController.getPostsLimit);
router.get("/new-post", postController.getNewPosts);

// router.use(verifyToken)
// router.post("/create-new",postController.createNewPost)

export default router;

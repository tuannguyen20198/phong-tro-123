import express from "express";

const router = express.Router();

router.get("/login", (req, res) => {
  res.send("Ok");
});
export default router;

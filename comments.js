// Create web server

// import module
const express = require("express");
const router = express.Router();
const CommentController = require("../controllers/comment.controller");

// Handle Request
router.get("/", CommentController.index);
router.get("/detail/:id", CommentController.detail);
router.get("/create", CommentController.create);
router.post("/create", CommentController.postCreate);
router.get("/delete/:id", CommentController.delete);
router.get("/update/:id", CommentController.update);
router.post("/update/:id", CommentController.postUpdate);
router.get("/delete/:id", CommentController.delete);

module.exports = router;

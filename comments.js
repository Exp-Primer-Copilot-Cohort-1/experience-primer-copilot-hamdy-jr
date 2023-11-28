// Create web service
// 1. Get comments by id
// 2. Get comments by user id
// 3. Create comment
// 4. Update comment
// 5. Delete comment
// 6. Get all comments

// Import express
const express = require("express");
// Import router
const router = express.Router();
// Import model
const Comment = require("../models/comment");
// Import controller
const commentController = require("../controllers/commentController");

// Get all comments
router.get("/", commentController.get_all_comments);

// Get comment by id
router.get("/:commentId", commentController.get_comment_by_id);

// Get comment by user id
router.get("/user/:userId", commentController.get_comment_by_user_id);

// Create comment
router.post("/", commentController.create_comment);

// Update comment
router.patch("/:commentId", commentController.update_comment);

// Delete comment
router.delete("/:commentId", commentController.delete_comment);

// Export module
module.exports = router;

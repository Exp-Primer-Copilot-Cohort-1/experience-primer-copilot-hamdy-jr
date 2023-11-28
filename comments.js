// Create wev service
// Export router

const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

router.get("/", commentController.index);
router.post("/create", commentController.create);
router.get("/:id", commentController.show);
router.put("/:id/update", commentController.update);
router.delete("/:id/delete", commentController.delete);

module.exports = router;

// Create Web Service
// Date: 10/19/2018
// Programmer: Phil Graham

// Import Modules
const express = require("express");
const router = express.Router();

// Import Models
const Comment = require("../models/comment");

// Web Service
// Get all comments
router.get("/", (req, res) => {
  Comment.find({}, (err, comments) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(comments);
    }
  });
});

// Get a comment by id
router.get("/:id", (req, res) => {
  Comment.findById(req.params.id, (err, comment) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(comment);
    }
  });
});

// Add a comment
router.post("/", (req, res) => {
  const comment = new Comment(req.body);
  comment.save((err, comment) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).json(comment);
    }
  });
});

// Update an existing comment
router.put("/:id", (req, res) => {
  Comment.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, comment) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).json(comment);
      }
    }
  );
});

// Delete a comment
router.delete("/:id", (req, res) => {
  Comment.findByIdAndRemove(req.params.id, (err, comment) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(comment);
    }
  });
});

// Export Module
module.exports = router;

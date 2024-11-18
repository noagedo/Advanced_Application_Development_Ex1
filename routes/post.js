const express = require("express");
const router = express.Router();
const postController = require("../controllers/post");

// Add a new post
router.post("/", postController.addNewPost);

// Get all posts
router.get("/", postController.getAllPosts);

// Get a post by ID
router.get("/:postId", postController.getPostById);

// Get posts by sender
router.get("/sender", postController.getPostBySender); 

// Update a post
router.put("/:postId", postController.updatePost);

module.exports = router;
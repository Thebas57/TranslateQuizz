const router = require("express").Router();
const authController = require("../controllers/auth.controller");
const wordController = require("../controllers/word.controller");
const userController = require("../controllers/user.controller");
const { Router } = require("express");

// auth
router.post("/register", authController.signUp);
router.post("/login", authController.signIn);
router.get("/logout", authController.logout);

// user
router.get("/:id", userController.getUser);
router.post("/upload/:id", userController.upload)

// Word
router.get("/:id", wordController.wordSearch);

module.exports = router;

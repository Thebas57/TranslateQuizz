const router = require("express").Router();
const authController = require("../controllers/auth.controller");
const wordController = require("../controllers/word.controller");

// auth
router.post("/register", authController.signUp);
router.post("/login", authController.signIn);
router.get("/logout", authController.logout);

// Word
router.get("/:id", wordController.wordSearch);

module.exports = router;

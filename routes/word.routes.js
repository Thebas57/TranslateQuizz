const router = require("express").Router();
const wordController = require("../controllers/word.controller");

// Word
router.get("/:id", wordController.wordSearch);
router.post("/", wordController.addWord);

module.exports = router;

const router = require("express").Router();
const wordController = require("../controllers/word.controller");

// Word
router.get("/:id", wordController.wordSearch);
router.post("/", wordController.addWord);
router.get("/", wordController.getWords);

router.patch("/:id", wordController.switchWord); // Permets de passer le mot en isLearned ou inversement

module.exports = router;

const path = require("path");
const router = require("express").Router();

// notes route to take to notes.html
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// all other routes respond with the index.html file
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
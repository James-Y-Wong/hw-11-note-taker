const router = require("express").Router();
const store = require("../db/store");

router.get("/notes", (req, res) => {
    res.json('Get!');
});

router.post("/notes", (req, res) => {
    store.addNote(req.body);
    res.json('Post!');
});

module.exports = router;
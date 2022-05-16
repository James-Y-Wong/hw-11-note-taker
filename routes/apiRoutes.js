const router = require("express").Router();
const { v4: uuidv4 } = require('uuid');
const {
    readFromFile,
    readAndAppend,
    readAndDelete,
  } = require('../helpers/fsUtils');

// get route for retrieving notes
router.get("/notes", (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// post route for new note, assigns new id, appends to db.json
router.post("/notes", (req, res) => {
    const newNote = req.body;
    newNote.id = uuidv4();

    readAndAppend(newNote, "./db/db.json");
    res.json(newNote);
});

// delete route to delete specific notes base on id
router.delete("/notes/:id", (req, res) => {
    readAndDelete(req.params.id, "./db/db.json");
    res.json({ ok: true });

});

module.exports = router;
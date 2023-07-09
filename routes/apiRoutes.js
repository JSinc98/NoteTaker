const { Router } = require("express");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const router = Router();

router.get("/notes", (req, res) => {

  let notes = JSON.parse(fs.readFileSync("./db/db.json"));

  res.json(notes);
});

router.post("/notes", (req, res) => {
  let db = fs.readFileSync("./db/db.json");
  db = JSON.parse(db);

  const newNote = {
    id: uuidv4(),
    title: req.body.title,
    text: req.body.text,
  };
  console.log(newNote);

  db.push(newNote);
  fs.writeFileSync("./db/db.json", JSON.stringify(db));
  res.json(db);
});
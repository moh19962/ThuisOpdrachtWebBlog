const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3014;
const pub = require("./publisher.js");
const mongoose = require("mongoose");
const Comment = require("../models/comments.js");
const initializeDb = require("../dataAcces/database");
require("./consumer.js");

app.use(cors());
app.use(express.json());

// Routes
app.post("/comments/:blogpostId", async (req, res) => {
  try {
    const newComment = new Comment({
      _id: userId,
      title,
      content,
    });
    await newComment.save();
    res.status(201).json({ message: "Bericht geplaatst", id: userId });
  } catch (error) {
    console.error(error); // Dit zal de fout naar de console loggen.
    res.status(500).json({ error: error.message }); // Dit stuurt de foutmelding terug naar de client.
  }
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

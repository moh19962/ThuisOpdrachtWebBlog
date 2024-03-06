const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3014;
const pub = require("./publisher.js");
require("./consumer.js");

app.use(cors());
app.use(express.json());

// Routes
app.post("/comments/:blogpostId", async (req, res) => {
  const { title, content } = req.body;
  const { blogpostId } = req.params;
  const newComment = new Comment({ blogpostId, title, content });
  await newComment.save();
  res.status(201).send(newComment);

  try {
    const newComment = new comments({
      _id: userId,
      title,
      content,
    });
    await newComment.save();
    res.status(201).json({ message: "Bericht geplaatst", id: userId });
  } catch (error) {
    res.status(500).json({
      error: "Kon bericht niet plaatsen",
    });
  }
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

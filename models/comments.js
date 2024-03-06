var mongoose = require("mongoose");

// Schema en model
const CommentSchema = new mongoose.Schema({
  blogpostId: String,
  title: String,
  content: String,
});

// Registreer het schema bij Mongoose als een model
module.exports = mongoose.model("Comment", CommentSchema);

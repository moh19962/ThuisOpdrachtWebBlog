var mongoose = require("mongoose");

var blogPostSchema = new mongoose.Schema({
  // _id: { type: String },
  title: { type: String, required: true },
  content: { type: String, required: true }, // Zorg ervoor dat dit attribuut overeenkomt met je behoeften
});

// Registreer het schema bij Mongoose als een model
module.exports = mongoose.model("BlogPost", blogPostSchema);

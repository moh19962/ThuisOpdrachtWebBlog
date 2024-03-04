var mongoose = require("mongoose");

var blogPostSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true, lowercase: true },
    title: { type: String, required: true },
  },

  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

// Middleware
blogPostSchema.pre("save", function (next) {
  console.log("Post will be saved");
  next();
  console.log("Post is saved");
});

// Registreer het schema bij Mongoose
mongoose.model("blogPostSchema", blogPostSchema);

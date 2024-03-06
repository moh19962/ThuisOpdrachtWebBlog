var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

module.exports = function () {
  if (mongoose.connection.readyState == 0) {
    var uri = "mongodb://127.0.0.1:27017/blogDemo";
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  }
  return mongoose;
};

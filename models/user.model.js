const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
  name: { type: String },
  dateOfBirth: { type: Date },
  address: { type: String },
});

// user.index({
//   name: "text",
// });

module.exports = mongoose.model("user", user);

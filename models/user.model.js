const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
  username: { type: String },
  password: { type: String },
  name: { type: String },
  phone: { type: String },
  address: { type: String },
});

// user.index({
//   name: "text",
// });

module.exports = mongoose.model("user", user);

const mongoose = require("mongoose");

async function connect() {
  try {
    console.log(process.env.MONGO_URL);
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("connect cuccessfully!!!");
  } catch (error) {
    console.log(error);
    console.log("connect failure!!!");
  }
}

module.exports = connect;

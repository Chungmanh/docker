const express = require("express");

require("dotenv").config({
  path: `${__dirname}/${process.env.NODE_ENV}.env`,
});

const apiMongodb = require("./routes/mongodb.route");
const apiRedis = require("./routes/redis.route");

const cors = require("cors");
const connect = require("./connectDB");
const app = express();
const port = 3000;

app.use(cors());

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.json()); // for parsing application/json

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

connect();

app.use("/mongodb", apiMongodb);
app.use("/redis", apiRedis);

// app.use("/redis", apiRedis);
// app.use("/elasticsearch", apiElasticsearch);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

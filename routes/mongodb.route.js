const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.get("/users", async (req, res) => {
  //   const users = await userController.getAllUser();
  //   res.json(users);
  res.json("users");
});

router.get("/all", async (req, res) => {
  const users = await userController.getAllUser();
  res.json(users);
});

router.post("/users", async (req, res) => {
  const user = await userController.addUser(req.body);
  res.json(user);
  // res.json("create");
});

module.exports = router;

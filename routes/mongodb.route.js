const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const userModel = require("../models/user.model");

router.get("/test", async (req, res) => {
  res.json("users");
});

router.get("/users", async (req, res) => {
  const users = await userController.getAllUser();
  res.json(users);
});

router.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  const user = await userController.getUser(id);
  res.json(user);
});

router.post("/users", async (req, res) => {
  const user = await userController.addUser(req.body);
  res.json(user);
});

router.put("/users/:id", async (req, res) => {
  console.log("req.params: ", req.params);
  const { id } = req.params;
  const user = await userController.updateUser(id, req.body);
  res.json(user);
});

router.delete("/users/:id", async (req, res) => {
  console.log("req.params: ", req.params);
  const { id } = req.params;
  const user = await userController.deleteUser(id);

  res.json(user);
});

module.exports = router;

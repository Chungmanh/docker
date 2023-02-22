const express = require("express");
const router = express.Router();
const redis = require("../controllers/redis.controller");

router.get("/test", async (req, res) => {
  res.json("redis test");
});

router.get("/users", async (req, res) => {
  await redis.connectRedis();
  const users = await redis.getAllUser();
  res.json(users);
  await redis.disconnectRedis();
});

router.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  console.log("id: ", id);
  await redis.connectRedis();
  const user = await redis.getUser(id);
  res.json(user);
  await redis.disconnectRedis();
});

router.post("/users", async (req, res) => {
  await redis.connectRedis();
  const user = await redis.addUser(req.body);
  res.json(user);
  await redis.disconnectRedis();
});

router.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  console.log("id: ", id);
  await redis.connectRedis();
  const user = await redis.updateUser(id, req.body);
  res.json(user);
  await redis.disconnectRedis();
});

router.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  console.log("id: ", id);
  await redis.connectRedis();
  const user = await redis.deleteUser(id);
  res.json(user);
  await redis.disconnectRedis();
});

module.exports = router;

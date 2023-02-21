const express = require("express");
const router = express.Router();
// const redis = require("../redisService")
const { createClient } = require('redis');

router.get("/test", async (req, res) => {
    res.json("redis test");
  });

// router.post("/post", async (req, res) => {
//     const client = createClient();

// client.on('error', err => console.log('Redis Client Error', err));

// await client.connect();

// await client.set('key', 'value');
// const value = await client.get('key');
// res.json(value)
// await client.disconnect();
// })




module.exports = router;
const { createClient } = require("redis");
const { v4: uuidv4 } = require("uuid");

let client;

exports.connectRedis = async () => {
  client = createClient({
    url: "redis://my-redis:6379",
  });
  try {
    await client.connect();
  } catch (error) {
    console.log("error:", error);
  }
};

exports.disconnectRedis = async () => {
  try {
    await client.disconnect();
  } catch (error) {
    console.log("error:", error);
  }
};

exports.getUser = async (key) => {
  try {
    const value = await client.hGetAll(key);
    return value;
  } catch (error) {
    console.log("error:", error);
  }
};

exports.addUser = async (user) => {
  try {
    const id = uuidv4();
    for (const [key, value] of Object.entries(user)) {
      await client.hSet(id, key, value);
    }
    return user;
  } catch (error) {
    console.log("error:", error);
  }
};

exports.updateUser = async (id, user) => {
  try {
    for (const [key, value] of Object.entries(user)) {
      await client.hSet(id, key, value);
    }
    return user;
  } catch (error) {
    console.log("error:", error);
  }
};

exports.deleteUser = async (id) => {
  try {
    const user = await client.del(id);
    return user;
  } catch (error) {
    console.log("error:", error);
  }
};

exports.getAllUser = async () => {
  try {
    const users = [];
    const keys = await client.keys("*");
    for (let i = 0; i < keys.length; i++) {
      const user = await client.hGetAll(keys[i]);
      users.push(user);
    }
    return users;
  } catch (error) {
    console.log("error:", error);
  }
};

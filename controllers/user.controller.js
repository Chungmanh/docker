const userModel = require("../models/user.model");

exports.getAllUser = async () => {
  try {
    const users = await userModel.find({});
    return users;
  } catch (error) {
    console.log("error: ", error);
  }
};

exports.addUser = async (user) => {
  try {
    console.log("user: ", user);
    // const { name, dateOfBirth, address } = user;
    // const userToAdd = {
    //   name,
    //   dateOfBirth: new Date(dateOfBirth),
    //   address,
    // };
    await userModel.create(user);
    console.log("ok");
  } catch (error) {
    console.log("error: ", error);
  }
};

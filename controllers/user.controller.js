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
    const created = await userModel.create(user);
    return created;
  } catch (error) {
    console.log("error: ", error);
  }
};

exports.updateUser = async (id, user) => {
  try {
    const updated = await userModel.findByIdAndUpdate(id, user)
    return updated;
  } catch (error) {
    console.log(error);
  }
};


exports.deleteUser = async (id) => {
  try {
    const deleted = await userModel.findByIdAndDelete(id);
    return deleted;
  } catch (error) {
    console.log("error: ", error);
  }
}
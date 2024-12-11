const userModel = require("../models/user-model");
exports.login = async (data) => {
  const { email, password } = data;
  const user = await userModel.getUserByEmail(email);

  if (!user) {
    throw new Error("Invalid email or password");
  }
  const validPassword = await userModel.comparePassword(
    password,
    user.password
  );
  if (!validPassword) {
    throw new Error("Invalid email or password");
  }

  const token = await userModel.generateToken(user);
  user.token = token;
  return user;
};

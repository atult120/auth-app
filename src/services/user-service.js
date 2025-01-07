const userRepository = require("../repositories/user_repository");
exports.login = async (data) => {
  const { email, password } = data;
  const user = await userRepository.getUserByEmail(email);

  if (!user) {
    throw new Error("Invalid email or password");
  }
  const validPassword = await userRepository.comparePassword(
    password,
    user.password
  );
  if (!validPassword) {
    throw new Error("Invalid email or password");
  }

  const token = await userRepository.generateToken(user);
  user.token = token;
  delete user.password;
  
  return user;
};

exports.register = async (data) => {
  const { name, email, password } = data;
  const user = await userRepository.getUserByEmail(email);
  if (user) {
    throw new Error("Email already exists");
  }
  const hashedPassword = await userRepository.hashPassword(password);

  const userId = await userRepository.createUser({
    name,
    email,
    password: hashedPassword,
  });

  const userData = await userRepository.getUserById(userId);
  userData.token = await userRepository.generateToken(userData);

  return userData;
};

exports.getProfile = async (userId) => {
  const user = await userRepository.getUserById(userId);

  if(!user) {
    throw new Error("User not found");
  }
  return user;
};
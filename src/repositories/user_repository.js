const db = require("../db/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

exports.getUserByEmail = async (email) => {
  return await User.query().where("email", email).select("id","name" , "password").first();
};

exports.comparePassword = async (password, userPassword) => {
    return await bcrypt.compare(password, userPassword);
}

exports.hashPassword = async (password) => {
    return await bcrypt.hash(password, 10);
}

exports.generateToken = (user) => {
    const token = jwt.sign({ user }, process.env.JWT_SECRET, {
        expiresIn: "1h"
    });
    return token;
}

exports.createUser = async (user) => {
    const [userCreated] =  await User.query().returning(['id', 'title']).insert(user , ['id']);
    return userCreated.id;
}

exports.getUserById = async (id) => {
    return await User.query().where("id", id).select("*").first();
}
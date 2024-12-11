const db = require("../db/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
exports.getUserByEmail = async (email) => {
  return await db.table("users").where("email", email).select("*").first();
};
exports.comparePassword = async (password, userPassword) => {
    console.log(userPassword);
    return await bcrypt.compare(password, userPassword);
}

exports.generateToken = (user) => {
    const token = jwt.sign({ user }, process.env.JWT_SECRET, {
        expiresIn: "1h"
    });

    return token;
}
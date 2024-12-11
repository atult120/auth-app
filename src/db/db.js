const knex = require('knex');
const knexConfig = require('../config/knexfile');

const enviroment = process.env.NODE_ENV || 'development';

const db = knex(knexConfig[enviroment]);

module.exports = db;
const knex = require('knex');
const Model = require('objection');
const knexConfig = require('../config/knexfile');

const enviroment = process.env.NODE_ENV || 'development';

const db = knex(knexConfig[enviroment]);
Model.Model.knex(db);
module.exports = db;
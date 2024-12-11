/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const bcrypt = require('bcrypt');
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      id: 1, name: 'Atul',
      email : 'atult120@gmail.com',
      password : bcrypt.hashSync('password', 10),
      role : 'admin'  
    },
  ]);
};

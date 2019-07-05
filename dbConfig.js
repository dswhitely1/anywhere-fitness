const knex=require('knex');
const knexconfig= require('./knexfile.js');
const environment=process.env.DB_ENV || 'development';

console.log('db env', environment);

const dbEnv=knex(knexconfig[environment]);

module.exports ={ dbEnv }

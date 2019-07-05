const knex=require('knex');
const config= require('./knexfile.js');
const environment=process.env.DB_ENV || 'development';

console.log('db env', environment);

const dbEnv=knex(config[environment]);

module.exports ={ dbEnv }

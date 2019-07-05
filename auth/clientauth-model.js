// const knex = require('knex');
// const knexConfig = require('../knexfile.js');
// const db = knex(knexConfig.development);

//environment to be dynamically set in Heroku
const dbConfig=require('../dbConfig.js')
const db = dbConfig.dbEnv

module.exports = {
    findUsers,
    findBy,
    addUser
}

    

    async function addUser(user){
        const [id]= await db('ClientLogin').insert(user);
        return await db('ClientLogin').where({id}).first();
    }

    function findUsers(){
        return db('ClientLogin')
    }

    function findBy(filter) {
        return db('ClientLogin').where(filter);
      }
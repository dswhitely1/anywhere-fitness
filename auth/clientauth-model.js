const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

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
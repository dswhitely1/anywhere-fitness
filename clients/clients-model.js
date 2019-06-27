const knex=require('knex');
const knexConfig = require('../knexfile.js');
const express = require('express');
const db=knex(knexConfig.development);


module.exports = {
    findAll,
    findById,
    findClientClasses, 
    clientClassSignup,

}

function findAll() {
    return db('ClientLogin')
}

function clientClassSignup(classe) {
    return db('ClassSignup').insert(classe)
}

    
    function findById(id) {
        return db('ClientLogin').where({id}); 
    }


    async function findClientClasses(id) {

        const signup = await db('ClassSignup')

        console.log(signup)
     
        return db('Classes as c')
          .join('ClassSignup as s', 's.class_id', 'c.id')
          
          .select(
                's.client_id as clientId', 
                'c.id as classId',      
                 'c.description',
                 'c.name as className',
                 'c.category_id as categoryId',
                 'c.date',
                 'c.time',
                 'c.address',
                 'c.city',
                 'c.state',
                 'c.zipcode'
                 )
          .where({ client_id: id });
      }

    
// const knex = require('knex');
// const knexConfig = require('../knexfile.js');
// const db = knex(knexConfig.development);

//environment to be dynamically set in Heroku
const dbConfig=require('../dbConfig.js')
const db = dbConfig.dbEnv


module.exports = {
    find,
    findById,
    findInstructorClasses, 
//     add,
//     remove,
//     update, 
  };



// Select * from cohorts;

function find() {
    return db('Login')

}


function findById(id) {
    return db('Login').where({id}); 
}

function findInstructorClasses(id) {
    return db('Classes as c')
      .join('Login as i', 'c.instructor_id', 'i.id')
      .select('c.id as classId', 
            'i.id as instructorId', 
            'c.name as className',
             'i.fullname as fullname',
             'i.username as username',
             'c.description',
             'c.date',
             'c.time',
             'c.address',
             'c.city',
             'c.state',
             'c.zipcode'
             
             )
      .where({ instructor_id: id });
  }
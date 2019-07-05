// const knex = require('knex');
// const knexConfig = require('../knexfile.js');
// const db = knex(knexConfig.development);

//environment to be dynamically set in Heroku
const dbConfig=require('../dbConfig.js')
const db = dbConfig.dbEnv


module.exports = {
    findClasses,
    findClassById,
    findClassesByCatId,
    addClass,
    removeClass,
    updateClass

  };



// Select * from cohorts;

function findClasses() {
    return db('Classes')

}


function findClassById(id) {
    return db('Classes').where({id}).first()

}

function findClassesByCatId(category_id) {
    return db('Classes').where({category_id}).first()

}

function addClass(something) {
    return db('Classes').insert(something)

}

function removeClass(id) {
    return db('Classes').where({id}).del()

}
function updateClass(id, changes) {
    return db('Classes').where({id}).update(changes);

}


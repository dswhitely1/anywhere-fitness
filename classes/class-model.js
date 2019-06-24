const knex=require('knex');
const knexConfig = require('../knexfile.js');
const express = require('express');
const db=knex(knexConfig.development);


module.exports = {
    findClasses,
    findClassById,
    addClass,
//     remove,
//     update, 
  };



// Select * from cohorts;

function findClasses() {
    return db('Classes')

}


function findClassById(id) {
    return db('Classes').where({id})

}

function addClass(something) {
    return db('Classes').insert(something)

}

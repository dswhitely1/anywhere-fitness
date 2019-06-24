const knex=require('knex');
const knexConfig = require('../knexfile.js');
const express = require('express');
const db=knex(knexConfig.development);


module.exports = {
    findClasses,
    findClassById,
    addClass,
    removeClass,
    updateClass

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

function removeClass(id) {
    return db('Classes').where({id}).del()

}
function updateClass(id, changes) {
    return db('Classes').where({id}).update(changes);

}


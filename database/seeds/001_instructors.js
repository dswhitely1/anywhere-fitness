
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Login').del()
    .then(function () {
      // Inserts seed entries
      return knex('Login').insert([
        { fullname: "azra panjwani " , username: 'fariz', password: "pass " },
        { fullname: "chris dalao" , username: 'fariz', password: "pass" },
        { fullname: "fariz chowdhury " , username: 'fariz', password: "pass" },
      ]);
    });
};

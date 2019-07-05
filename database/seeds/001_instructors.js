
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Login').del()
    .then(function () {
      // Inserts seed entries
      return knex('Login').insert([
        { fullname: "azra panjwani " , username: 'azra', password: "pass " },
        { fullname: "chris dalao" , username: 'chris', password: "pass" },
        { fullname: "fariz chowdhury " , username: 'fariz', password: "pass" },
      ]);
    });
};

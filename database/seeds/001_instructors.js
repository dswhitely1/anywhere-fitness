
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        { fullname: "azra panjwani " , username: 'fariz', password: "pass " },
        { fullname: "chris dalao" , username: 'fariz', password: "pass" },
        { fullname: "fariz chowdhury " , username: 'fariz', password: "pass" },
      ]);
    });
};

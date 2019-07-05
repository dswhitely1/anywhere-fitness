

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Categories').delete()
    .then(function () {
      // Inserts seed entries
      return knex('Categories').insert([
        { name: 'Pilates'},
        { name: 'Yoga'},
        { name: 'Lagree'},
        { name: 'Barre'},
        { name: 'Spin'},
        { name: 'Zumba'},

      ]);
    });
};

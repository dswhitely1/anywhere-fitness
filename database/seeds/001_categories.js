exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE TABLE Categories CASCADE')
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

// exports.seed = function(knex, Promise) {
//   // Deletes ALL existing entries
//   return knex('Categories').trunctate()
//     .then(function () {
//       // Inserts seed entries
//       return knex('Categories').insert([
//         { name: 'Pilates'},
//         { name: 'Yoga'},
//         { name: 'Lagree'},
//         { name: 'Barre'},
//         { name: 'Spin'},
//         { name: 'Zumba'},

//       ]);
//     });
// };

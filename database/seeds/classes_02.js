
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Classes').del()
    .then(function () {
      // Inserts seed entries
      return knex('Classes').insert([
        {instructor_id: 1,
        category_id: 1 ,
        name: 'reformer pilates'
        },

        {instructor_id: 1,
        category_id: 2 ,
        name: 'power yoga'
        },

        {instructor_id: 2,
        category_id: 2 ,
        name: 'yin yoga',
        },

        {instructor_id: 2,
        category_id: 3 ,
        name: 'Core40',
               },
        
        
      ]);
    });
};


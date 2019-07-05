
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Classes').delete()
    .then(function () {
      // Inserts seed entries
      return knex('Classes').insert([
        {id:1,
        instructor_id: 1,
        category_id: 1 ,
        name: 'reformer pilates'
        },

        {id:2,
          instructor_id: 1,
        category_id: 2 ,
        name: 'power yoga'
        },

        {id:3,
          instructor_id: 2,
        category_id: 2 ,
        name: 'yin yoga',
        },

        {id:4,
          instructor_id: 2,
        category_id: 3 ,
        name: 'Core40',
               },
        
        
      ]);
    });
};


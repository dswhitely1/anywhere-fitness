
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ClassSignup').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ClassSignup').insert([
        {
           client_id: 1,
           class_id: 1,
          },
    //       {id: 2,
    //         client_id: '1',
    //         class_id: '2',
    //        },
    //        {id: 3,
    //         client_id: '1',
    //         class_id: '3',
    //        },
    //        {id: 4,
    //          client_id: '2',
    //          class_id: '1',
    //         },
    //         {id: 5,
    //           client_id: '2',
    //           class_id: '2',
    //          },
    //          {id: 6,
    //            client_id: '2',
    //            class_id: '4',
    //           },
    //           {id: 7,
    //            client_id: '3',
    //            class_id: '3',
    //           },
    //           {id: 8,
    //             client_id: '3',
    //             class_id: '2',
    //            },
      ]);
    });
};

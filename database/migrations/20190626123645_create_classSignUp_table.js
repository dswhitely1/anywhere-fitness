
exports.up = async function(knex, Promise) {


    await knex.schema.createTable('ClassSignup', (tbl) => {
    tbl.increments();
    tbl
      .integer('client_id')
      .references('id')
      .inTable('ClientLogin')
      .onDelete('CASCADE') 
      .onUpdate('CASCADE');
    
      tbl
      .integer('class_id')
      .notNullable()
      .references('id')
      .inTable('Classes')
      .onDelete('CASCADE') 
      .onUpdate('CASCADE');

      tbl
      .integer('price', 128)
      .notNullable()
      .defaultTo(2000) //$20 classes


     
      });


// upon log in:

// 1) they see the list of classes they have already signed up for. 
//2) if they haven't signed up for any, can get conditional render [click here to search classes]

//3) there is a "search new classes" search bar when user logs in 



//upon login this is what the client sees:
//Endppoint: GET api/client/id/classes - all the classes a client has signed up for

// THEN >> a client can navigate to a "SEARCH NEW CLASSES" page
    //Endpoint: GET: api/classes

    //THEN: client can api/classes/:categoryId 
    //Chris needs to pass me the categoryId which he can get from the classes array

// THEN >> a client can click through to a specific class
// Endpoint: No new endpoint needed

//THEN >> a client can sign up for 
 
//SEARCHING FOR NEW CLASS:
//api/classes  give client access to that endpoint with restricted middleware

//sign up for a class:
//POST:
    //api/clients/:clientId/classes/:classId/signup

    //api/clients/:clientId/classes


    //api/classes/:classId/signup
      
      


  
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('ClassSignup')
};

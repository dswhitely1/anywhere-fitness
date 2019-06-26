
exports.up = async function(knex, Promise) {
    await knex.schema.createTable('ClientLogin', tbl =>{
        tbl.increments()
        tbl.string('fullname').notNullable()
        tbl.string('username').notNullable().unique()
        tbl.string('password').notNullable()
    })
  
  
  
  
  
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('ClientLogin')
   
  };



exports.up = async function(knex, Promise) {
    await knex.schema.createTable('Login', tbl =>{
        tbl.increments()
        tbl.string('fullname').notNullable()
        tbl.string('username').notNullable().unique()
        tbl.string('password').notNullable()
    })
  
    await knex.schema.createTable('Categories', (tbl) => {
        tbl.increments();
        tbl
          .string('name', 128) //eg. yoga, pilates, barre, 
          .notNullable()
          .unique()
       
        tbl
          .string('description')
        
      })
  
      await knex.schema.createTable('Classes', (tbl) => {
        tbl.increments();
        tbl
          .integer('instructor_id')
          .notNullable()
          .references('id')
          .inTable('Login')
          .onDelete('CASCADE') 
          .onUpdate('CASCADE');
        
          tbl
          .integer('category_id')
          .notNullable()
          .references('id')
          .inTable('Categories')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
  
          tbl
          .string('name', 128)
          .notNullable()
          .unique();
  
          tbl
          .string('description')
          .defaultTo('TBD');
  
          tbl
          .date('date')
          .defaultTo('TBD'); 
  
          tbl
          .string('time')
          .defaultTo('TBD') 
  
          tbl
          .string('address')
          .defaultTo('TBD')
          
          tbl
          .string('city')
          .defaultTo('TBD')
  
          tbl
          .string('state')
          .defaultTo('TBD')
  
          tbl
          .string('zipcode')
          .defaultTo('TBD')
  
          
      })
  
  
  
  
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('ClientLogin')
    .dropTableIfExists('Categories')
    .dropTableIfExists('Classes')
  };

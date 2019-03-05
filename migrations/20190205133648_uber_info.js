exports.up = function(knex, Promise) {
  return knex.schema.createTable('uber_info', table => {
    table.increments('id').primary()
    table.integer('eta_of_pickup')
    table.integer('estimated_price')
  })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('uber_info')
};

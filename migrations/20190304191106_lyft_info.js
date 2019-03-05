
exports.up = function(knex, Promise) {
  return knex.schema.createTable('lyft_info', table => {
    table.increments('id').primary()
    table.integer('eta_of_pickup')
    table.integer('estimated_price')
    table.integer('passenger_id').notNullable()
    table.foreign('passenger_id').references('passenger_info.id')
  })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('lyft_info')
};
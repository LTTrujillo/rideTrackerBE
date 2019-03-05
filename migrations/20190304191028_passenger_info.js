exports.up = function(knex, Promise) {
  return knex.schema.createTable('passenger_info', table => {
    table.increments('id').primary()
    table.string('pickup_address')
    table.string('dropoff_address')
    table.integer('pickup_lat')
    table.integer('pickup_long')
    table.integer('dropoff_lat')
    table.integer('dropoff_long')
  }) 
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('passenger_info')
};
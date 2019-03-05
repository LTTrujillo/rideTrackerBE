exports.up = function(knex, Promise) {
  return knex.schema.createTable('ride_info', table => {
    table.increments('id').primary()
    table.string('pickup_address')
    table.string('dropoff_address')
    table.integer('pickup_lat')
    table.integer('pickup_long')
    table.integer('dropoff_lat')
    table.integer('dropoff_long')
    table.integer('uber_id').references('id').inTable('uber_info')
    table.integer('lyft_id').references('id').inTable('lyft_info')

  }) 
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ride_info')
};
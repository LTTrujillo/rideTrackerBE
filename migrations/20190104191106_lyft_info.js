
exports.up = function(knex, Promise) {
  return knex.schema.createTable('lyft_info', table => {
    table.increments('id').primary()
    table.integer('eta_of_pickup')
    table.decimal('estimated_price')
  })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('lyft_info')
};
exports.up = knex => {

    return knex.schema.createTable('recipes', (table) => {
      table.increments('id').primary
      table.string('name')
      table.string('image')
      table.string('description')
      table.string('other')
    })
  
}
  
  exports.down = knex => {

    return knex.schema.dropTable('recipes')
}
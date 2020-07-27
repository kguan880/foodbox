exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          id: 1,
          name: 'rowValue1',
          image: 'rowValue1',
          description: 'rowValue1',
          other: 'rowValue1'
        },
        {
          id: 2,
          name: 'rowValue2',
          image: 'rowValue2',
          description: 'rowValue2',
          other: 'rowValue2'
        },
        {
          id: 3,
          name: 'rowValue3',
          image: 'rowValue3',
          description: 'rowValue3',
          other: 'rowValue3'
        }
      ])
    })
}

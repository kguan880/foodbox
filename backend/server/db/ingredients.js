const knex = require('knex')
const config = require('../../knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

function getIngredientList(db = connection) {
   
    return db('ingredientss')
    .select()
}

function getIngredientById(id, db = connection) {
    
    return db('ingredients')
    .where('id', id)
    .then((ingredients) => {
        return ingredients[0]
    })
}

module.exports = {
    getIngredientList,
    getIngredientById
}
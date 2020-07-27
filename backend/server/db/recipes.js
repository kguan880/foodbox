const knex = require('knex')
const config = require('../../knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

function getRecipeList(db = connection) {
   
    return db('recipes')
    .select()
}

function getRecipeById(id, db = connection) {
    
    return db('recipes')
    .where('id', id)
    .then((recipes) => {
        return recipes[0]
    })
}

module.exports = {
    getRecipeList,
    getRecipeById
}
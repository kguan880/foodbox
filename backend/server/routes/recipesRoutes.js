const express = require('express')
const db = require('../db/recipes')
const router = express.Router()

router.get('/', (req, res) => {

    db.getRecipeList()
    .then(recipes => {
        res.json(recipes)
    })
})


router.get('/recipes/:id', (req, res) => {
    
    let id = req.params.id
    db.getRecipeById(id)
        .then((recipes) => {
            res.json(recipes)
        })
    
})

module.exports = router
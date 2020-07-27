const express = require('express')
const db = require('../db/ingredients')
const router = express.Router()

router.get('/', (req, res) => {

    db.getIngredientList()
    .then(ingredients => {
        res.json(ingredients)
    })
})


router.get('/ingredients/:id', (req, res) => {
    
    let id = req.params.id
    db.getIngredientById(id)
        .then((ingredients) => {
            res.json(ingredients)
        })
    
})

module.exports = router
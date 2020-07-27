import request from 'superagent'
import { getIngredients, getIngredientById } from '../apis/ingredients'

export function getIngredientList(ingredients) {
    return {
        type: 'GET_RECIPES',
        ingredients: ingredients
    }
}

export function fetchIngredients() {
    return (dispatch) => {
            getIngredients()
            .then((ingredients) => {
                dispatch(getIngredientList(Ingredients))
            })
    }
}

export function setIngredientById(){
    return (dispatch) => {
        setEvent(ingredient)
        .then(ingredient =>{
            dispatch(getIngredientById(ingredient.id))
        })
    }
}
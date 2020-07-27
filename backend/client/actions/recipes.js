import request from 'superagent'
import { getRecipes, getRecipeById } from '../apis/recipes'

export function getRecipeList(recipes) {
    return {
        type: 'GET_RECIPES',
        recipes: recipes
    }
}

export function fetchRecipes() {
    return (dispatch) => {
            getRecipes()
            .then((recipes) => {
                dispatch(getRecipeList(recipes))
            })
    }
}

export function setRecipeById(){
    return (dispatch) => {
        setEvent(recipe)
        .then(recipe =>{
            dispatch(getRecipeById(recipe.id))
        })
    }
}
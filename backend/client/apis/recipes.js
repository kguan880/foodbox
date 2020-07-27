import request from 'superagent'

export const recipesUrl = '/api/v1/recipes'

export function getRecipes () {
  return request.get(recipesUrl)
  .then(res => res.body)
}

export function getRecipeById (recipe) {
  return request.get(recipesUrl +`${recipe.id}`)
  .then(res => res.body)
}
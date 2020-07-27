import request from 'superagent'

export const ingredientsUrl = '/api/v1/ingredients'

export function getIngredients () {
  return request.get(ingredientsUrl)
  .then(res => res.body)
}

export function getIngredientById (ingredient) {
  return request.get(ingredientsUrl +`${ingredient.id}`)
  .then(res => res.body)
}
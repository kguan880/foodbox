import {combineReducers} from 'redux'

import auth from './auth'
import ingredients from './ingredients'
import recipes from './recipes'

export default combineReducers({
  auth,
  ingredients,
  recipes
})
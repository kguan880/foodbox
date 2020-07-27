function ingredients (state=[], action) {
    
    switch (action.type) {
        case 'GET_INGREDIENTS':
            return action.ingredients
        case 'SET_INGREDIENT':
            return action.ingredient
        default:
            return state
    }
}

export default ingredients
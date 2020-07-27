function recipes (state=[], action) {
    
    switch (action.type) {
        case 'GET_RECIPES':
            return action.recipes
        case 'SET_RECIPE':
            return action.recipe
        default:
            return state
    }
}

export default recipes
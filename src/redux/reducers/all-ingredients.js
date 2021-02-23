const allIngredients = (state = [], action) => {
    switch (action.type) {
        case 'SET_ALL_INGREDIENTS':
            return action.payload;
        default:
            return state;
    }
}
export default allIngredients;
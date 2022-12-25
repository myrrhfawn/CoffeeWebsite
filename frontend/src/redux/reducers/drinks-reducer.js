
const DRINKS_FETCH_DATA_SUCCESS = "DRINKS_FETCH_DATA_SUCCESS";

const initialState = [{
    "title": "Brazilean Sweet Cappucino",
    "description": "Premium coffe bleands for everyone bu labella.",
    "price": 0.0,
    "image": "123",
    "is_available": true,
    "varts": []
}];

export function drinksReducer(state = initialState, action) {
    switch(action.type) {
        case DRINKS_FETCH_DATA_SUCCESS:
            return action.drinks
        default:
            return state
    }
};



const VARIETIES_FETCH_DATA_SUCCESS = "VARIETIES_FETCH_DATA_SUCCESS";

const initialState = [{
    "title": "Brazilean Sweet Cappucino",
    "description": "Premium coffe bleands for everyone bu labella.",
    "image": "123",
}];

export function varietiesReducer(state = initialState, action) {
    switch(action.type) {
        case VARIETIES_FETCH_DATA_SUCCESS:
            return action.varieties
        default:
            return state
    }
};


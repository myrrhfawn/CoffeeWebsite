
const VARIETIES_FETCH_DATA_SUCCESS = "VARIETIES_FETCH_DATA_SUCCESS";
const DRINKS_FETCH_DATA_SUCCESS = "DRINKS_FETCH_DATA_SUCCESS";

const initialState = {
    "drinks":[{
        "title": "Brazilean Sweet Cappucino",
        "description": "Premium coffe bleands for everyone bu labella.",
        "price": 0.0,
        "image": "123",
        "is_available": true,
        "varts": []
    }],
    "varieties": [{
        "title": "Brazilean Sweet Cappucino",
        "description": "Premium coffe bleands for everyone bu labella.",
        "image": "123", 
    }],
   
};

export function mainPageReducer(state = initialState, action) {
    switch(action.type) {
        case DRINKS_FETCH_DATA_SUCCESS:
            return {
                ...state,
                drinks: action.drinks
            }
        case VARIETIES_FETCH_DATA_SUCCESS:
            debugger
            return {
                ...state,
                varieties: action.varieties
            }
        default:
            return state
    }
};

export function varietiesFetchDataSuccess(varieties){
    return {
        type: VARIETIES_FETCH_DATA_SUCCESS,
        varieties
    }
};

export function VarietiesFetchData(){
    const url = "http://localhost:8000/api/varietylist/";
    return (dispatch) => {
        fetch(url)
        .then(response => {
            if(!response.ok){
                throw new Error(response.statusText)
            }
            return response;
        })
        .then(response => response.json())
        .then(varieties => dispatch(varietiesFetchDataSuccess(varieties)))
    }
};


export function drinksFetchDataSuccess(drinks){
    return {
        type: DRINKS_FETCH_DATA_SUCCESS,
        drinks
    }
};

export function DrinksFetchData(){
    const url = "http://localhost:8000/api/drinklist/";
    return (dispatch) => {
        fetch(url)
        .then(response => {
            if(!response.ok){
                throw new Error(response.statusText)
            }
            return response;
        })
        .then(response => response.json())
        .then(drinks => dispatch(drinksFetchDataSuccess(drinks)))
    }
};

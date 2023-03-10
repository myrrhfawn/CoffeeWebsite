
const VARIETIES_FETCH_DATA_SUCCESS = "VARIETIES_FETCH_DATA_SUCCESS";
const DRINKS_FETCH_DATA_SUCCESS = "DRINKS_FETCH_DATA_SUCCESS";
const HANDPICKED_FETCH_DATA_SUCCESS = "HANDPICKED_FETCH_DATA_SUCCESS";
const ARTICLES_FETCH_DATA_SUCCESS = "ARTICLES_FETCH_DATA_SUCCESS"

const initialState = {
    "drinks":[{
        "title": "Brazilean Sweet Cappucino",
        "description": "Premium coffe bleands for everyone bu labella.",
        "price": 0.0,
        "image": "123",
        "is_available": true,
        "varts": []
    },{
        "title": "Brazilean Sweet Cappucino",
        "description": "Premium coffe bleands for everyone bu labella.",
        "price": 0.0,
        "image": "123",
        "is_available": true,
        "varts": []
    },{
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
    },{
        "title": "Brazilean Sweet Cappucino",
        "description": "Premium coffe bleands for everyone bu labella.",
        "image": "123", 
    },{
        "title": "Brazilean Sweet Cappucino",
        "description": "Premium coffe bleands for everyone bu labella.",
        "image": "123", 
    },{
        "title": "Brazilean Sweet Cappucino",
        "description": "Premium coffe bleands for everyone bu labella.",
        "image": "123", 
    },{
        "title": "Brazilean Sweet Cappucino",
        "description": "Premium coffe bleands for everyone bu labella.",
        "image": "123", 
    }],
    "handpicked":[{
        "title": "Brazilean Sweet Cappucino",
        "description": "Premium coffe bleands for everyone bu labella.",
        "price": 0.0,
        "image": "123",
        "is_available": true,
        "varts": []
    },{
        "title": "Brazilean Sweet Cappucino",
        "description": "Premium coffe bleands for everyone bu labella.",
        "price": 0.0,
        "image": "123",
        "is_available": true,
        "varts": []
    },{
        "title": "Brazilean Sweet Cappucino",
        "description": "Premium coffe bleands for everyone bu labella.",
        "price": 0.0,
        "image": "123",
        "is_available": true,
        "varts": []
    },{
        "title": "Brazilean Sweet Cappucino",
        "description": "Premium coffe bleands for everyone bu labella.",
        "price": 0.0,
        "image": "123",
        "is_available": true,
        "varts": []
    }],
    "articles":[{
        "title": "It is a long established fact that",
        "image": "123",
        "text": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo ligula eget dolor. Aenean massa. ",
        "time_created": "19.10.2003",
    },
    {
        "title": "It is a long established fact that",
        "image": "123",
        "text": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo ligula eget dolor. Aenean massa. ",
        "time_created": "19.10.2003",
    },
    {
        "title": "It is a long established fact that",
        "image": "123",
        "text": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo ligula eget dolor. Aenean massa. ",
        "time_created": "19.10.2003",
    }]
};

export function mainPageReducer(state = initialState, action) {
    switch(action.type) {
        case DRINKS_FETCH_DATA_SUCCESS:
            return {
                ...state,
                drinks: action.drinks
            }
        case VARIETIES_FETCH_DATA_SUCCESS:
            return {
                ...state,
                varieties: action.varieties
            }
        case HANDPICKED_FETCH_DATA_SUCCESS:
            return {
                ...state,
                handpicked: action.handpicked
            }
        case ARTICLES_FETCH_DATA_SUCCESS:
            return {
                ...state,
                articles: action.articles
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

export function handpickedFetchDataSuccess(handpicked){
    return {
        type: HANDPICKED_FETCH_DATA_SUCCESS,
        handpicked
    }
};

export function HandpickedFetchData(){
    const url = "http://localhost:8000/api/drinklist/handpicked/";
    return (dispatch) => {
        fetch(url)
        .then(response => {
            if(!response.ok){
                throw new Error(response.statusText)
            }
            return response;
        })
        .then(response => response.json())
        .then(handpicked => dispatch(handpickedFetchDataSuccess(handpicked)))
    }
};


export function articlesFetchDataSuccess(articles){
    return {
        type: ARTICLES_FETCH_DATA_SUCCESS,
        articles
    }
};

export function ArticlesFetchData(){
    const url = "http://localhost:8000/api/articlelist/";
    return (dispatch) => {
        fetch(url)
        .then(response => {
            if(!response.ok){
                throw new Error(response.statusText)
            }
            return response;
        })
        .then(response => response.json())
        .then(articles => dispatch(articlesFetchDataSuccess(articles)))
    }
};

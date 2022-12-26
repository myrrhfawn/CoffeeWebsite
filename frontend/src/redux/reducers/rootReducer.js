import { combineReducers } from "redux";
import { drinksReducer } from "./drinks-reducer";
import { varietiesReducer } from "./varieties-reducer";


const rootReducer = combineReducers({
    drinksReducer,
    varietiesReducer,

});

export default rootReducer;
import { combineReducers } from "redux";
import { mainPageReducer } from "./mainpage-reducer";


const rootReducer = combineReducers({
    mainPageReducer,
});

export default rootReducer;
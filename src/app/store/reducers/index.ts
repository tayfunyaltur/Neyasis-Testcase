import { combineReducers } from "redux";
import resourceReducer from "./resourceReducer";

const rootReducer = combineReducers({
    resources: resourceReducer,
});

export default rootReducer;

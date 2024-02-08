import { combineReducers } from "redux";
import resourceReducer from "./resourceReducer";
import userReducer from "./userReducers";

const rootReducer = combineReducers({
    resources: resourceReducer,
    user: userReducer,
});

export default rootReducer;

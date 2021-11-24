import { combineReducers } from "redux";
import AppReducer from "../components/app/reducer";

const rootReducer = combineReducers({
  App: AppReducer,
});

export default rootReducer;

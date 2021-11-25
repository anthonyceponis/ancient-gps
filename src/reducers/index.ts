import { combineReducers } from "redux";
import AppReducer from "../components/app/reducer";
import NavReducer from "../components/navbar/reducer";

const rootReducer = combineReducers({
  App: AppReducer,
  Navbar: NavReducer,
});

export default rootReducer;

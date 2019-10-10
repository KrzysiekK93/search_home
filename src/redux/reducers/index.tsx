import { combineReducers } from "redux";
import adverts from "./advertsReducer";

const rootReducer = combineReducers({
  adverts,
});

export default rootReducer;

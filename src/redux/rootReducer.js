import { combineReducers } from "redux";
import CartReducer from "./CartReducer";
const rootReducer = combineReducers({
  //store tong ung dung
  stateCart: CartReducer, // state Cart
});

export default rootReducer;

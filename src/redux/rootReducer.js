import { combineReducers } from "redux";
import BaitapXucXacReducer from "./BaiTapXucXacReducer";
import CartReducer from "./CartReducer";
import OneTwoThreeReducer from "./OneTwoThreeReducer";
const rootReducer = combineReducers({
  //store tong ung dung
  stateCart: CartReducer, // state Cart
  BaitapXucXacReducer, //state  game
  OneTwoThreeReducer,
});

export default rootReducer;

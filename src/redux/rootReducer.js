import { combineReducers } from "redux";
import BaitapXucXacReducer from "./BaiTapXucXacReducer";
import CartReducer from "./CartReducer";
import OneTwoThreeReducer from "./OneTwoThreeReducer";
import BookingTicketReducer from "./BookingTicketReducer";
const rootReducer = combineReducers({
  //store tong ung dung
  stateCart: CartReducer, // state Cart
  BaitapXucXacReducer, //state  game
  OneTwoThreeReducer,
  BookingTicketReducer,
});

export default rootReducer;

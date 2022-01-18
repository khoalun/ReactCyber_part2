import { DAT_GHE } from "../types/BookingTicketType";
import { HUY_GHE } from "../types/BookingTicketType";
const stateDefault = {
  listChoosing: [
    // { soGhe: "B1", price: 2000 }, du lieu mac dinh
    // { soGhe: "C1", price: 2000 },
  ],
};

const BookingTicketReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DAT_GHE: {
      let listChoosingUpdate = [...state.listChoosing];
      let index = listChoosingUpdate.findIndex(
        (SD) => SD.soGhe === action.id.soGhe
      );
      if (index !== -1) {
        listChoosingUpdate.splice(index, 1);
      } else {
        listChoosingUpdate.push(action.id);
      }
      state.listChoosing = listChoosingUpdate;
      return { ...state };
    }

    case HUY_GHE: {
      let listChoosingUpdate = [...state.listChoosing];
      let index = listChoosingUpdate.findIndex(
        (SD) => SD.soGhe === action.seat
      );
      if (index !== -1) {
        listChoosingUpdate.splice(index, 1);
      }
      state.listChoosing = listChoosingUpdate;
      return { ...state };
    }
    default:
      return {
        ...state,
      };
  }
};

export default BookingTicketReducer;

const stateDefault = {
  listChoosing: [
    // { ghe: "A1", price: 1000 },
    { ghe: "B1", price: 2000 },
    { ghe: "C1", price: 2000 },
  ],
};

const BookingTicketReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_GHE": {
      let listChoosingUpdate = [...state.listChoosing];
      let index = listChoosingUpdate.findIndex(
        (SD) => SD.soGhe === action.ghe.soGhe
      );
      if (index !== -1) {
        listChoosingUpdate.splice(index, 1);
      } else {
        listChoosingUpdate.push(action.ghe);
      }
      state.listChoosing = listChoosingUpdate;
      return { ...state };
    }

    case "HUY_GHE": {
      let listChoosingUpdate = [...state.listChoosing];
      let index = listChoosingUpdate.findIndex(
        (SD) => SD.soGhe === action.soGhe
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

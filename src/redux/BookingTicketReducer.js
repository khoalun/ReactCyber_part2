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
        //khi người dùng click Ghế đang đặt đã có trong mảng => remove đi
        //
        listChoosingUpdate.splice(index, 1);
      } else {
        //khi người dùng click Ghế đang đặt chưa có trong mảng => push vào mảng
        listChoosingUpdate.push(action.ghe);
      }
      //Cập nhật lại state => giao diện render lại
      state.listChoosing = listChoosingUpdate;
      return { ...state };
    }
    case "HUY_GHE": {
      let listChoosingUpdate = [...state.listChoosing];
      let index = listChoosingUpdate.findIndex((Ph) => Ph.soGhe === action.soGhe);
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

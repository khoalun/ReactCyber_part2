//set up state at store

const stateCart = {
  cartDefault: [
    {
      id: 1,
      name: "name",
      img: "",
      quantity: 1,
      price: 0,
    },
  ],
};

const CartReducer = (state = stateCart, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "ADDING_CART": {
      let index = state.cartDefault.findIndex(
        (Pd) => Pd.id === action.spGioHang.id
      );
      if (index !== -1) {
        state.cartDefault[index].quantity += 1;
      } else {
        state.cartDefault.push(action.spGioHang);
      }
      //setState redux
      state.cartDefault = [...state.cartDefault];

      return { ...state };
    }
    case "XOA_GIO_HANG": {
      //fINDING INDEX TO DELETE
      let index = state.cartDefault.findIndex((Pd) => Pd.id === action.id);
      if (index !== -1) {
        state.cartDefault.splice(index, 1);
      }
      state.cartDefault = [...state.cartDefault];
      return { ...state };
    }
    case "TANG_GIAM_SO_LUONG":
      {
        let index = state.cartDefault.findIndex((Pd) => Pd.id === action.id);
        if (index !== -1) {
          if (action.increaseDecrease) {
            state.cartDefault[index].quantity += 1;
          } else {
            if (state.cartDefault[index].quantity > 1)
              state.cartDefault[index].quantity -= 1;
            else {
              alert("Minimum is 1");
            }
          }
          state.cartDefault = [...state.cartDefault];
          return { ...state };
        }
      }
      break;
    default:
      return { ...state };
  }
};

export default CartReducer;

const stateDefault = {
  arrayBet: [
    { id: "keo", img: "./img/gameOneTwo/keo.png", bet: false },
    { id: "bua", img: "./img/gameOneTwo/bua.png", bet: false },
    { id: "bao", img: "./img/gameOneTwo/bao.png", bet: true },
  ],
  result: "I love you 3000",
  roundWin: 0,
  totalRound: 0,
  computer: { id: "keo", img: "./img/gameOneTwo/keo.png" },
};

const OneTwoThreeReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHON_KEO_BUA_BAO": {
      let betUpdating = [...state.arrayBet];
      betUpdating = betUpdating.map((item, index) => {
        if (item.id === action.id) {
          return { ...item, bet: true };
        }
        return { ...item, bet: false };
      });
      // console.log("updating", betUpdating);
      // let index = betUpdating.findIndex((Pd) => Pd.id === action.id);
      // if (index !== -1) {
      //   betUpdating[index].bet = true;
      // }

      state.arrayBet = betUpdating;
      return { ...state };
    }
    case "RAN_DOM": {
      let numberRandom = Math.floor(Math.random() * 3);
      let arrayRandom = state.arrayBet[numberRandom];
      state.computer = arrayRandom;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default OneTwoThreeReducer;

const stateDefault = {
  arrayBet: [
    { ma: "keo", img: "./img/gameOneTwo/keo.png", bet: false },
    { ma: "bua", img: "./img/gameOneTwo/bua.png", bet: false },
    { ma: "bao", img: "./img/gameOneTwo/bao.png", bet: true },
  ],
  result: "I love you 3000",
  roundWin: 0,
  totalRound: 0,
  computer: { ma: "keo", img: "./img/gameOneTwo/keo.png" },
};

const OneTwoThreeReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHON_KEO_BUA_BAO": {
      let betUpdating = [...state.arrayBet];
      betUpdating = betUpdating.map((item, index) => {
        if (item.ma === action.ma) {
          return { ...item, bet: true };
        }
        return { ...item, bet: false };
      });
      // console.log("updating", betUpdating);
      // let index = betUpdating.findIndex((Pd) => Pd.ma === action.ma);
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
    case "END_GAME":
      let player = state.arrayBet.find((Pd) => Pd.bet === true);
      let computer = state.computer;
      switch (player.ma) {
        case "keo":
          if (computer.ma === "keo") {
            state.result = "Kẻ tám lạng , người nửa cân";
          } else if (computer.ma === "bua") {
            state.result = "Ngu dốt";
          } else {
            state.roundWin += 1;
            state.result = "U là trời";
          }
          break;
        case "bua":
          if (computer.ma === "keo") {
            state.roundWin += 1;
            state.result = "Tuổi loz";
          } else if (computer.ma === "bua") {
            state.result = "trời sinh du sao còn sinh lượng";
          } else {
            state.result = "Còn cái nịt";
          }
          break;
        case "bao":
          if (computer.ma === "keo") {
            state.result = "Hông bé ơi ";
          } else if (computer.ma === "bua") {
            state.roundWin += 1;
            state.result = "I love you 3000";
          } else {
            state.result = "Bất phân thắng bại";
          }
          break;
        default:
          state.roundWin += 1;
          state.result = "Are you ready to play";
      }
      state.totalRound += 1;
      return { ...state };
    default:
      return { ...state };
  }
};

export default OneTwoThreeReducer;

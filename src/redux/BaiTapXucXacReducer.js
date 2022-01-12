const stateDefault = {
  taiXiu: true, // True :tai (tu 3 -> 11)  false:xiu >11
  arrayXucXac: [
    { id: 1, img: "./img/gameXucXac/5.png" },
    { id: 1, img: "./img/gameXucXac/5.png" },
    { id: 1, img: "./img/gameXucXac/5.png" },
  ],
  roundWin: 0,
  totalRound: 0,
};

const BaitapXucXacReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_CUOC":
      state.taiXiu = action.taiXiu;
      return { ...state };
    case "PLAY_GAME": {
      let arrayRandom = [];
      for (let i = 0; i < 3; i++) {
        let randomNumber = Math.floor(Math.random() * 6) + 1;
        let xucXacRandom = {
          id: randomNumber,
          img: `./img/gameXucXac/${randomNumber}.png`,
        };
        arrayRandom.push(xucXacRandom);
      }
      state.arrayXucXac = arrayRandom;
      console.log(state.arrayXucXac);
      state.totalRound += 1;

      let tongsoDiem = arrayRandom.reduce((tongDiem, xucxac, index) => {
        return (tongDiem += xucxac.id);
      }, 0);
      if (
        (tongsoDiem > 11 && state.taiXiu === true) ||
        (tongsoDiem <= 11 && state.taiXiu === false)
      ) {
        state.roundWin += 1;
      }
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default BaitapXucXacReducer;

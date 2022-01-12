import React, { Component } from "react";
import { connect } from "react-redux";
class Player extends Component {
  render() {
    console.log(this.props.arrayBet);
    return (
      <div className="text-center">
        <div className="speech-bubble" style={{ marginLeft: "75px" }}>
          <img
            width={100}
            src={this.props.arrayBet.find((item) => item.bet === true).img}
            alt={this.props.arrayBet.find((item) => item.bet === true).img}
          />
        </div>
        <img
          src="./img/gameOneTwo/goku.jpg"
          alt="./img/gameOneTwo/goku.jpg"
          style={{
            width: "250px",
            height: "250px",
            transForm: "rotate(90deg)",
          }}
        />
        <div className="row">
          {this.props.arrayBet.map((item, index) => {
            // Adding border to selecting Bet
            let border = {};
            if (item.bet) {
              border = { border: "3px solid orange" };
            }

            return (
              <div className="col-4" key={index}>
                <button style={border} className="btnItem" onClick={() => {this.props.bet(item.id)}}>
                  <img width={50} height={50} src={item.img} alt={item.img} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    arrayBet: state.OneTwoThreeReducer.arrayBet,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    bet: (id) => {
      dispatch({
        type: "CHON_KEO_BUA_BAO",
        id
      });
    },
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(Player);

import React, { Component } from "react";
import { ModelContext } from "../_Context/ModelContext";
class ModelProfile extends Component {
  render() {
    return (
      <ModelContext.Consumer>
        {(value) => {
          return (
            <div className=" mt-5">
              <h3
                style={{
                  border: "2px solid black",
                  width: 300,
                  backgroundColor: "ivory",
                }}
              >
                Profile
              </h3>
              <div
                className="card text-white bg-dark mt-10"
                style={{ width: 300 }}
              >
                <img
                  className="card-img-top"
                  src="https://qph.fs.quoracdn.net/main-qimg-2f0d5e0e2b8eafd5f3034a7fe5783216-c"
                  alt="123"
                  style={{ width: 300, height: 300 }}
                />
                <div className="card-body">
                  <h4 className="card-title">Name: Goku</h4>
                  <p className="card-text">Age: 18</p>
                  <span style={{ color: "ivory" }}>
                    {value.state} <i className="fa fa-heart"></i>
                  </span>
                </div>
              </div>
            </div>
          );
        }}
      </ModelContext.Consumer>
    );
  }
}

export default ModelProfile;

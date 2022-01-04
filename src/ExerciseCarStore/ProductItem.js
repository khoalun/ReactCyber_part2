import React, { Component } from "react";

export default class ProductItem extends Component {
    render() {
      let {propsData} = this.props
    return (
      <div className="card text-left">
        <img className="card-img-top" src={propsData.img} alt={propsData.img} />
        <div className="card-body">
          <h4 className="card-title">{propsData.name}</h4>
          <p className="card-text">{propsData.price}</p>
          <button
            className="btn btn-success"
            data-toggle="modal"
                    data-target="#modelId"
                    onClick={() => {
                        this.props.changetoSecondButton(propsData)
                    }}
          >
            View Details
          </button>
        </div>
      </div>
    );
  }
}

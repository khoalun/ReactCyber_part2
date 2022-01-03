import React, { Component } from 'react'

export default class PhoneItem extends Component {
    render() {
        let {propsData} =this.props
        return (
          <div className="card">
            <img
              className="card-img-top"
              src={propsData.hinhAnh}
              alt={propsData.hinhAnh}
              style={{ width: 250, height: 250, marginLeft: "25%" }}
            />
            <div className="card-body">
              <h4 className="card-title">{propsData.tenSP}</h4>
              <p className="card-text">Price: {propsData.giaBan.toLocaleString()}</p>
              <button
                className="btn btn-success"
                onClick={() => {
                 this.props.propsUpdatingState(propsData)
                }}
              >
                Xem chi tiết{" "}
              </button>
            </div>
          </div>
        );
    }
}

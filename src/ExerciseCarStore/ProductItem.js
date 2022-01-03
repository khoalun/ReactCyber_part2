import React, { Component } from 'react'

export default class ProductItem extends Component {
    
    render() {
        let {propsItem} =this.props
        return (
          <div className="card text-left">
            <img
              className="card-img-top"
              src={propsItem.img}
              alt={propsItem.img}
            />
            <div className="card-body">
              <h4 className="card-title">{propsItem.name}</h4>
              <p className="card-text font-weight-bold">
                {propsItem.price.toLocaleString()}
              </p>
              <button
                className="btn btn-success"
                data-toggle="modal"
                        data-target="#modelId"
                        onClick={() => {
                            this.props.changeDatatoSecond(propsItem)
                        }}
              >
                Xem Chi Tiet
              </button>
            </div>
          </div>
        );
    }
}

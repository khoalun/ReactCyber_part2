import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        let {image,name,description,price,id} = this.props.renderItem
        return (
          <div className="card text-left mt-5">
            <img className="card-img-top" src={image} alt={id} />
            <div className="card-body">
              <h4 className="card-title">{name}</h4>
              <p className="card-text">
                {description.length > 75 ? (
                  <p>{description.substr(0, 75)} ...</p>
                ) : (
                  <p> {description} </p>
                )}
              </p>

              <p className="card-text font-weight-bold">Price: {price}</p>
              <button className="btn btn-dark w3-hover-dark-grey">
                Add to cart <i class="fa fa-shopping-cart"></i>
              </button>
            </div>
          </div>
        );
    }
}

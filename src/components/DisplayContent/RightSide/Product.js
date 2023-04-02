import React from 'react';
import "./RightSide.css";

function Product(props) {
    return (
      <div className="product">
        <div className="product_image">
          <img src={props.defination.image} height="300px" />
        </div>
        <div className="product_name">{props.defination.name}</div>
        <div className="product_rating">{props.defination.rating}</div>
        <div className="product_price">{props.defination.price}</div>
      </div>
    );
}

export default Product;
import React from 'react';
import "./RightSide.css";
import { Rating } from '@mui/material';
import getSymbolFromCurrency from 'currency-symbol-map';

function Product(props) {
    return (
      <div className="product">
        <div className="product_image">
          <img src={props.defination.image} height="300px" />
        </div>
        <div className="product_name">
          {props.defination.name}
        </div>
        <div className="product_rating">
          <Rating name="read-only" value="4" style={{ fontSize: "20px" }} readOnly />
          {props.defination.rating}
        </div>
        <div className="product_price">
          {getSymbolFromCurrency('INR')}
          {props.defination.price}
        </div>
      </div>
    );
}

export default Product;
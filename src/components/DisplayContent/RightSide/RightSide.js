import React from 'react';
import "./RightSide.css";
import Product from './Product';

function RightSide(props) {
    return (
      <div className="RightSide_main">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    );
}

export default RightSide;
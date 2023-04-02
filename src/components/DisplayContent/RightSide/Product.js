import React from 'react';
import "./RightSide.css";

function Product(props) {
    return (
      <div className='product'>
        <div className="product_image">
          <img src="https://ik.imagekit.io/a7tcqauqn/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1680099277169" height="300px" />
        </div>
        <div className="product_name">Name</div>
        <div className="product_rating">Rating</div>
        <div className="product_price">Price</div>
      </div>
    );
}

export default Product;
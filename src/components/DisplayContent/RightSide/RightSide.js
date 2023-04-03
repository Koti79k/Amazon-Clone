import React, { useEffect, useState } from 'react';
import "./RightSide.css";
import Product from './Product';

function RightSide(props) {
  const [listOfProduct, setListOfProducts] = useState([]);
  useEffect(() => {
    //api call
    let list = [
      {
        name: "Redmi 9",
        rating: "4265",
        price: "7,999",
        image:
          "https://ik.imagekit.io/a7tcqauqn/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1680099277169",
      },
      {
        name: "Redmi 7",
        rating: "6594",
        price: "8,999",
        image:
          "https://ik.imagekit.io/a7tcqauqn/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1680099277169",
      },
      {
        name: "Redmi 10",
        rating: "39935",
        price: "9,999",
        image:
          "https://ik.imagekit.io/a7tcqauqn/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1680099277169",
      },
      {
        name: "Redmi 11",
        rating: "78695",
        price: "10,999",
        image:
          "https://ik.imagekit.io/a7tcqauqn/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1680099277169",
      },
    ];
    setListOfProducts(list);
     // setListOfProducts function is used to update the component's state 
    //with this list of products.
  },);
    return (
      <div className="RightSide_main">
        {/* <Product
          rating="5"
          price="2999"
          name="Redmi Mobile"
          image="https://ik.imagekit.io/a7tcqauqn/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1680099277169"/>
        <Product />
        <Product />
        <Product /> */}

        {/* -------- for iterating the objects which is present in list ------- */}
        {
          listOfProduct.map((item) => (
            <Product defination={item} />
          ))
        }
      </div>
    );
}

export default RightSide;


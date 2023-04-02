import React from 'react'; //short cut : rsf
import "./AdvertisementOne.css";

//template for functional component
function AdvertisementOne(props) {
    return (
      <div className="AdvertisementOne__main">
        <div className="AdvertisementOne__header">
          Up to 70% off | Electronics clearence store
        </div>
        <div className="AdvertisementOne__body">
          <img src="" />
        </div>
        <div className="AdvertisementOne__footer">See more</div>
      </div>
    );
}

export default AdvertisementOne;
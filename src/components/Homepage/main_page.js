import React, { Component } from 'react';
import "./main_page.css";
import AdvertisementFour from './AdvertisementFour/AdvertisementFour';
import AdvertisementOne from './AdvertisementOne/AdvertisementOne';


class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
          <div className="mainpage">
            <div style={{ paddingTop: "20px", display: "flex" }}>
              <AdvertisementOne />
              <AdvertisementFour />
              <AdvertisementFour />
              
            </div>
          </div>
        );
    }
}

export default MainPage;
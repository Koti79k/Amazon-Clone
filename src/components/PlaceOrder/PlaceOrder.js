import React, { useContext } from 'react';
import "./PlaceOrder.css";
import { Grid, Rating } from '@mui/material';

function PlaceOrder(props) {
   

    return (
      <div>
        <Grid container>
          <Grid item xs={5}>
            <img
              className="placeorder__image"
              src="https://ik.imagekit.io/a7tcqauqn/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1680099277169"
            />
          </Grid>
          <Grid item xs={4}>
            <div className="placeholder__description">
              <div
                style={{
                  fontSize: "24px",
                  lineHeight: "32px",
                  fontWeight: 500,
                }}
              >
                I phone 11
              </div>
              <div>
                <Rating
                  name="read-only"
                  value="3"
                  readOnly
                  style={{ fontSize: "20px" }}
                />
                30000 ratings |1000+
                answered questions
              </div>
              <hr></hr>
              <div>
                <div className="textgap">
                  {/* Price:{" "} */}
                  <span className="pricetag">₹ 2000000</span>
                </div>
                <div className="textgap">
                  FREE delivery: Avaible
                </div>
                <div className="textgap">
                  EMI starts at ₹ 2401. No Cost EMI available
                </div>
                <div
                  style={{ color: "#007600", fontSize: "20px" }}
                  className="textgap"
                >
                  
                </div>
                <div className="textgap">
                  Sold by cust and Fulfilled
                  by Amazon.
                </div>
              </div>
              <div>
                <br></br>
                <div style={{ fontSize: "24px" }} className="textgap">
                  About this item
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={3}>

              <div>
                <div>
                  <strong>Without Exchange</strong>
                </div>
                <div>50,999</div>
                <div style={{ marginTop: "10px" }}>
                </div>
                <div>
                  <label>
                    <input type="checkbox"></input>Apple Airpods
                  </label>
                  <br></br>
                  <label>
                    <input type="checkbox"></input>Apple 20W USB Power Adapter
                  </label>
                </div>
                <div>
                  <button
                    className="placeorder__button addtocart"
                    
                  >
                    Add to Cart
                  </button>
                    <button className="placeorder__button buynow">
                      Buy Now
                    </button>
                </div>
              </div>

          </Grid>
        </Grid>
      </div>
    );
}

export default PlaceOrder;
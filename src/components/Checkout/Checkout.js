import { Grid } from "@mui/material";
import "./Checkout.css";
import CheckoutItems from "./CheckoutItems";

function Checkout(props) {
  // Rendering the shopping cart interface with a two-column layout
  return (
    <div className="checkout__body">
      <Grid container>
        {/* Defining the left column with 10 out of 12 grid units */}
        <Grid item={10}>
          <div className="checkout__container">
            {/* Rendering the shopping cart header */}
            <div
              style={{
                fontSize: "30px",
                fontWeight: "500",
                padding: "20px 0px 0px 20px",
              }}
            >
              Shopping Cart
            </div>
            {/* Rendering a message if the cart is empty */}
            <div>Please buy something</div>
            {/* Rendering the cart items with the CheckoutItems component */}
            <CheckoutItems />
            <CheckoutItems />
            <CheckoutItems />
          </div>
        </Grid>
        {/* Defining the right column with 2 out of 12 grid units */}
        <Grid item={2}>
          {/* Rendering a white box with the "Proceed to Buy" button */}
          <div
            style={{
              width: "300px",
              height: "200px",
              padding: "20px",
              marginTop: "25px",
              backgroundColor: "white",
            }}
          >
            <div style={{ fontSize: "26px" }}></div>
            <div style={{ paddingTop: "25px " }}>
              {/* Rendering the "Proceed to Buy" button */}
              <button className="placeorder__button">Proceed to Buy</button>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Checkout;

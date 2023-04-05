//imrc shortcut for importing react Libraries and components
import React, { Component } from "react";
import "./navbar.css"
import { CartContext } from "../CartContextProvider";
import { Link } from "react-router-dom";

//ccc is the shortcut for Component Class With Constructor
class NavBar extends Component {

  static contextType = CartContext;

  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { item, size, increment } = this.context;
    return (
      <div>
        <div className="navbar_component">
          <div className="navbar_logo"></div>
          {/* -------- Location section --------- */}
          <div className="navbar__locator">
            <div className="navbar__locatorImage"></div>
            <div className="navbar_location">Bangalore</div>
          </div>
          {/* -------- search bar section --------- */}
          <div className="navbar__searchcomponent">
            <div>
              <select className="nav__dropdown">
                <option value="All">All</option>
                <option value="Alexa">Alexa</option>
                <option value="Books">Books</option>
                <option value="Baby">Baby</option>
                <option value="Beauty">Beauty</option>
                <option value="Clothes">Clothes</option>
              </select>
            </div>
            <div>
              <input type="text" className="navbar__searchbox" />
            </div>
            <div className="navbar__seaarchboxdiv">
              <div className="navbar__searchicon" />
            </div>
          </div>

          <div className="navbar_text navbar__signin">
            <div style={{ fontSize: "14px" }}>Hello, Sign In</div>
            <div style={{ fontWeight: "bold" }}>Account & List</div>
          </div>
          <div className="navbar_text navbar__returns">
            <div style={{ fontSize: "14px" }}>Returns</div>
            <div style={{ fontWeight: "bold" }}> & Order</div>
          </div>
          <Link to="/checkout">
            <div className="navbar_text navbar__cart">
              <div src="" className="cart__image"></div>
              {/* ====== for no. of items in cart ========== */}
              <div className="cart__item"> {size} </div>{" "}
              <div className="navbar_text_cart">Cart</div>
            </div>
          </Link>
        </div>

        {/* ================ navbar footer Section ================== */}
        <div className="navbar__footer">
          <div className="navbar__footer_text">Best Seller</div>
          <div className="navbar__footer_text">Mobile</div>
          <div className="navbar__footer_text">Amazon Pay</div>
          <div className="navbar__footer_text">Fashion</div>
          <div className="navbar__footer_text">Electronics</div>
          <div className="navbar__footer_text">Prime</div>
          <div className="navbar__footer_text">New Release</div>
          <div className="navbar__footer_text">Customer Service</div>
          <div className="navbar__footer_text">Computers</div>
          <div className="navbar__footer_text">Home & Kitchen</div>
        </div>
      </div>
    );
  }
}

export default NavBar;

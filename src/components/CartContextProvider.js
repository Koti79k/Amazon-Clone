import React, { Component, createContext } from "react";

// Creating a new context object
export const CartContext = createContext();

// Creating a new class-based component named CartContextProvider
class CartContextProvider extends Component {
  constructor(props) {
    super(props);

    // Retrieving the cart items from local storage and parsing it as JSON, if it exists
    let existingCart =
      localStorage.getItem("myCart") != undefined ? JSON.parse(localStorage.getItem("myCart")): [];

    // Getting the length of existing cart items
    let cartLength = existingCart.length;

    // Initializing the state object with existing cart items and its length,
    // along with an increment function to add new items to the cart
    this.state = {
      item: existingCart,
      size: cartLength,
      increment: (value) => {
        let itemList = this.state.item;
        itemList.push(value);

        // Updating the state with the new item added to the cart
        this.setState({ item: itemList });

        // Updating the cart size after the new item is added
        this.setState({ size: this.state.item.length });

        // Saving the updated cart items to local storage
        this.state.saveToLocalCache();
      },

      // A function to save the updated cart items to local storage
      saveToLocalCache: () => {
        localStorage.setItem("myCart", JSON.stringify(this.state.item));
      },
    };
  }

  render() {
    // Rendering the CartContextProvider component with the state object as its value
    // and passing the children components as props
      return (
    // { ...this.state, ...this.increment } is a shorthand for creating a new object that contains all the properties of this.state object along with the increment function.
      <CartContext.Provider value={{ ...this.state, ...this.increment }}>
        {this.props.children}
      </CartContext.Provider>
    );
  }
}

export default CartContextProvider;

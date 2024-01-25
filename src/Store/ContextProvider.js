import React, { useState } from "react";
import Context from "./Context";

const ContextProvider = (props) => {
  const [Items, setItems] = useState([]);
  const [CartItems, setCartItems] = useState([]);

  const AddItems = (item) => {
    setItems((prev) => [...prev, item]);
  };
  const AddCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };
  const RemoveItem = (item) => {
    Items.filter((Item) => Item.id !== item.id);
  };
  const RemoveCart = (item) => {
    CartItems.filter((Item) => Item.id !== item.id);
  };

  const context = {
    Items: Items,
    Cart: CartItems,
    AddItems: AddItems,
    AddCart: AddCart,
    RemoveCart: RemoveCart,
    RemoveItem: RemoveItem,
  };

  return <Context.Provider value={context}>{props.children}</Context.Provider>;
};
export default ContextProvider;

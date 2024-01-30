import React, { useState } from "react";
import Context from "./Context";

const ContextProvider = (props) => {
  const [Items, setItems] = useState([]);
  const [CartItems, setCartItems] = useState([]);
  const [total, settotal] = useState(0);

  const AddItems = (item) => {
    setItems((prev) => [...prev, { ...item }]);
  };
  const AddCart = (item) => {
    console.log(item);
    setCartItems((prev) => [...prev, { ...item }]);
  };
  const RemoveItem = (item) => {
    Items.filter((Item) => Item.id !== item.id);
  };
  const RemoveCart = (item) => {
    CartItems.filter((Item) => Item.id !== item.id);
  };
  const AddTotal = (worth) => {
    console.log(total);
    settotal((prev) => prev + worth);
  };

  const context = {
    Items: Items,
    Cart: CartItems,
    AddItems: AddItems,
    AddCart: AddCart,
    Addtotal: AddTotal,
    total: total,
  };

  return <Context.Provider value={context}>{props.children}</Context.Provider>;
};
export default ContextProvider;

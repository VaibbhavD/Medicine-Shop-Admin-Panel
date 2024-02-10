import React, { useEffect, useState } from "react";
import Context from "./Context";

const ContextProvider = (props) => {
  const [Items, setItems] = useState([]);
  const [CartItems, setCartItems] = useState([]);
  const [total, settotal] = useState(0);

  const AddItems = (item) => {
    setItems((prev) => [...prev, { ...item }]);

    fetch("https://crudcrud.com/api/7bfb46669b604c0d8d4b60c85db02d62/User", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-type": "application/json",
      },
    });
  };

  useEffect(() => {
    fetch("https://crudcrud.com/api/7bfb46669b604c0d8d4b60c85db02d62/User")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const AddCart = (item) => {
    console.log(item);
    setCartItems((prev) => [...prev, { ...item }]);

    fetch("https://crudcrud.com/api/7bfb46669b604c0d8d4b60c85db02d62", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-type": "application/json",
      },
    });
  };

  useEffect(() => {
    fetch("https://crudcrud.com/api/7bfb46669b604c0d8d4b60c85db02d62")
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 1) setCartItems(data);
      });
  }, []);

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

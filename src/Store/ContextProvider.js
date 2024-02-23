import React, { useEffect, useState } from "react";
import Context from "./Context";

const ContextProvider = (props) => {
  const [Items, setItems] = useState([]);
  const [CartItems, setCartItems] = useState([]);
  const [total, settotal] = useState(0);

  const AddItems = (item) => {
    fetch(
      "https://expense-tracker-f0c7b-default-rtdb.firebaseio.com/User.json",
      {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setItems((prev) => [...prev, { ...item, name: data.name }]);
      });
  };

  useEffect(() => {
    fetch("https://expense-tracker-f0c7b-default-rtdb.firebaseio.com/User.json")
      .then((res) => res.json())
      .then((data) => {
        let temp = [];
        for (const key in data) {
          console.log(key);
          temp.push({ ...data[key], name: key });
        }
        setItems(temp);
      });
  }, []);

  const AddCart = (item) => {
    const NewItem = CartItems.find((Item) => Item.id === item.id);
    UpdateItems(item);

    if (NewItem) {
      UpdateCart(item);
      NewItem.Qty = NewItem.Qty + item.Qty;
    } else {
      fetch(
        "https://expense-tracker-f0c7b-default-rtdb.firebaseio.com/Cart.json",
        {
          method: "POST",
          body: JSON.stringify(item),
          headers: {
            "Content-type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setCartItems((prev) => [...prev, { ...item, name: data.name }]);
        });
    }
  };

  const RemoveItem = (item) => {
    const temp = Items.filter((Item) => Item.name !== item.name);
    fetch(
      `https://expense-tracker-f0c7b-default-rtdb.firebaseio.com/User/${item.name}.json`,
      {
        method: "DELETE",
      }
    );
    setItems(temp);
  };

  useEffect(() => {
    fetch("https://expense-tracker-f0c7b-default-rtdb.firebaseio.com/Cart.json")
      .then((res) => res.json())
      .then((data) => {
        let temp = [];
        for (const key in data) {
          temp.push({ ...data[key], name: key });
        }
        setCartItems(temp);
      });
  }, []);

  const RemoveCart = (item) => {
    const temp = CartItems.filter((Item) => Item.id !== item.id);

    fetch(
      `https://expense-tracker-f0c7b-default-rtdb.firebaseio.com/Cart/${item.name}.json`,
      {
        method: "DELETE",
      }
    );
    setCartItems(temp);
  };
  const AddTotal = (worth) => {
    console.log(total);
    settotal((prev) => prev + worth);
  };

  const UpdateItems = (Item) => {
    const NewItem = Items.find((item) => item.name === Item.name);
    const updateitem = {
      id: NewItem.id,
      Name: NewItem.Name,
      Price: NewItem.Price,
      Qty: NewItem.Qty - Item.Qty,
      name: NewItem.name,
    };
    fetch(
      `https://expense-tracker-f0c7b-default-rtdb.firebaseio.com/User/${Item.name}.json`,
      {
        method: "PUT",
        body: JSON.stringify(updateitem),
      }
    );
  };
  const UpdateCart = (Item) => {
    const NewItem = CartItems.find((item) => item.id === Item.id);
    const updateitem = {
      id: NewItem.id,
      Name: NewItem.Name,
      Price: NewItem.Price,
      Qty: NewItem.Qty + Item.Qty,
      name: NewItem.name,
    };
    fetch(
      `https://expense-tracker-f0c7b-default-rtdb.firebaseio.com/Cart/${NewItem.name}.json`,
      {
        method: "PUT",
        body: JSON.stringify(updateitem),
      }
    );
  };

  const context = {
    Items: Items,
    Cart: CartItems,
    AddItems: AddItems,
    AddCart: AddCart,
    RemoveCart: RemoveCart,
    RemoveItem: RemoveItem,
    Addtotal: AddTotal,
    total: total,
  };

  return <Context.Provider value={context}>{props.children}</Context.Provider>;
};
export default ContextProvider;

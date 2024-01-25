import React from "react";

const Context = React.createContext({
  Items: [],
  Cart: [],
  AddItems: (item) => {},
  AddCart: (item) => {},
  RemoveCart: (item) => {},
  RemoveItem: (item) => {},
});
export default Context;

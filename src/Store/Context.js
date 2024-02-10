import React from "react";

const Context = React.createContext({
  Items: [],
  Cart: [],
  AddItems: (item) => {},
  AddCart: (item) => {},
  RemoveCart: (item) => {},
});
export default Context;

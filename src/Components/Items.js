import React, { useContext } from "react";
import Context from "../Store/Context";
import ShowItems from "./ShowItems";
import "./Items.css";

const Items = () => {
  const context = useContext(Context);

  if (context.Items.length === 0) {
    return (
      <>
        <h1>Inventory</h1>
        <h3>Stock Inventory Is Empty !</h3>
      </>
    );
  }

  return (
    <>
      ()
      <h1>Inventory</h1>
      {context.Items.map((item) => (
        <ul className="items">
          <ShowItems item={item} key={item.id} />
        </ul>
      ))}
    </>
  );
};
export default Items;

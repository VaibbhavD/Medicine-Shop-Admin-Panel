import React, { useContext } from "react";
import Context from "../Store/Context";

const CartItem = (props) => {
  const context = useContext(Context);

  return (
    <li key={props.item.id}>
      name-{props.item.Name} Qty-{props.item.Qty} Price-{props.item.Price}
      <button onClick={() => context.RemoveCart(props.item)}>X</button>
    </li>
  );
};
export default CartItem;

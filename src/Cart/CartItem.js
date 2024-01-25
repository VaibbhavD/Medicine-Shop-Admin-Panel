import React from "react";

const CartItem = (props) => {
  return (
    <li key={props.item.id}>
      name-{props.item.name} Qty-{props.item.Qty} Price-{props.item.Price}
    </li>
  );
};
export default CartItem;

import React, { useContext } from "react";
import Context from "../Store/Context";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import CartItem from "./CartItem";

const Cart = (props) => {
  const context = useContext(Context);

  const diesableshow = () => {
    props.diesableshow();
  };

  return (
    <Modal>
      <ul>
        {context.Cart.map((item) => (
          <CartItem item={item} />
        ))}
        <Button onClick={diesableshow}>Close</Button>
      </ul>
    </Modal>
  );
};
export default Cart;

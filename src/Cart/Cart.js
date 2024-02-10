import React, { useContext, useEffect, useState } from "react";
import Context from "../Store/Context";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import CartItem from "./CartItem";

const Cart = (props) => {
  const context = useContext(Context);
  const [empty, setempty] = useState(false);
  const [total, settotal] = useState();
  const [cart, setcart] = useState(context.Cart);

  const diesableshow = () => {
    props.diesableshow();
  };

  useEffect(() => {
    let total = context.Cart.reduce(
      (sum, item) => sum + item.Price * item.Qty,
      0
    );
    settotal(total);
  }, []);

  useEffect(() => {
    if (context.Cart.length !== 0) {
      setempty(true);
    }
  }, [context]);

  return (
    <Modal>
      <ul>
        {empty === true ? (
          cart.map((item) => <CartItem item={item} />)
        ) : (
          <h3>Cart Is Empty!</h3>
        )}
        <h4>Total Amount -{total}</h4>
        <Button onClick={diesableshow}>Close</Button>
      </ul>
    </Modal>
  );
};
export default Cart;

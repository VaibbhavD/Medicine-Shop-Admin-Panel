import React, { useContext, useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Context from "../Store/Context";
import classes from "./ShowItems.module.css";

const ShowItems = (props) => {
  const context = useContext(Context);
  const [qty, setqty] = useState(Number(props.item.Qty));

  const SubmitHandler = (e) => {
    e.preventDefault();
    setqty((prev) => prev - e.target.qty.value);

    let Add = false;

    if (e.target.qty.value > 0) {
      context.Cart.map((item) =>
        item.id === props.item.id
          ? ((item.Qty = Number(item.Qty) + Number(e.target.qty.value)),
            (Add = true))
          : null
      );
      if (!Add) {
        context.AddCart(props.item, (props.item.Qty = e.target.qty.value));
      }
    }
    context.Addtotal(props.item.Price * props.item.Qty);
    e.target.qty.value = 0;
  };

  return (
    <div className={classes.li}>
      <li key={props.item.id}>
        Name-{props.item.Name} Price-{props.item.Price} Qty-{qty}
        <form onSubmit={SubmitHandler}>
          <input type="number" min="1" name="qty" max={qty} />

          <Button type="submit">Add Cart</Button>
        </form>
      </li>
    </div>
  );
};
export default ShowItems;

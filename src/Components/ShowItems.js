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
    setqty(qty - e.target.qty.value);
    context.AddCart({
      id: props.item.id,
      Name: props.item.Name,
      Price: props.item.Price,
      Qty: Number(e.target.qty.value),
      name: props.item.name,
    });

    e.target.qty.value = 0;
  };

  if (qty === 0) {
    context.RemoveItem(props.item);
  }
  console.log(props.item.name);

  return (
    <div className={classes.li}>
      <li key={props.item.id}>
        Name-{props.item.Name} Price-{props.item.Price} Qty-{qty}
        <form onSubmit={SubmitHandler}>
          <input type="number" min="1" name="qty" max={qty} />

          <Button type="submit">Add Cart</Button>
          <Button type="button" onClick={() => context.RemoveItem(props.item)}>
            Remove
          </Button>
        </form>
      </li>
    </div>
  );
};
export default ShowItems;

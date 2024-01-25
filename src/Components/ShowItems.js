import React, { useContext, useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Context from "../Store/Context";

const ShowItems = (props) => {
  const context = useContext(Context);
  const [qty, setqty] = useState(props.item.Qty);

  const SubmitHandler = (e) => {
    e.preventDefault();
    if (qty > 0) {
      context.AddCart([{ ...props.item }, (props.item.Qty = qty)]);
      console.log(props.item.Qty);
      // context.Items.map((item) =>
      //   item.id === props.item.id ? (item.Qty = item.Qty - qty) : null
      // );
    }
    console.log(context.Cart);
  };

  return (
    <li key={props.item.id}>
      Name-{props.item.Name} Price-{props.item.Price} Qty-{props.item.Qty}
      <form onSubmit={SubmitHandler}>
        <Input
          type="number"
          min="1"
          name="qty"
          max={qty}
          onChange={(e) => setqty(e.target.value)}
        />

        <Button type="submit">Add Cart</Button>
      </form>
    </li>
  );
};
export default ShowItems;

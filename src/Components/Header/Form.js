import React, { useContext } from "react";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import Context from "../../Store/Context";
import classes from "./Header.module.css";

const Form = () => {
  const context = useContext(Context);

  const SubmitHandler = (e) => {
    e.preventDefault();

    if (
      e.target.MedicineName.value !== null &&
      e.target.Price.value !== null &&
      e.target.Qty.value > 0
    ) {
      const Medicine = {
        Name: e.target.MedicineName.value,
        Price: e.target.Price.value,
        Qty: Number(e.target.Qty.value),
        id: Math.random(),
      };
      context.AddItems(Medicine);
    } else {
      alert("Please Add Values Properly");
    }
  };

  return (
    <form onSubmit={SubmitHandler}>
      <div className={classes.form}>
        <Input
          label="Medicine Name"
          type="text"
          placeholder="Name"
          name="MedicineName"
        />

        <Input label="Price" type="number" placeholder="price" name="Price" />

        <Input label="Qty" type="text" placeholder="Quantity" name="Qty" />

        <Button type="submit">Add Product</Button>
      </div>
    </form>
  );
};
export default Form;

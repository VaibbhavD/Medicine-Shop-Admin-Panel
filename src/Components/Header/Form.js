import React, { useContext, useState } from "react";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import Context from "../../Store/Context";
import classes from "./Header.module.css";

const Form = (props) => {
  const context = useContext(Context);

  const enable = () => {
    props.enable();
  };

  const SubmitHandler = (e) => {
    e.preventDefault();

    const Medicine = {
      Name: e.target.MedicineName.value,
      Price: Number(e.target.Price.value),
      Qty: Number(e.target.Qty.value),
      id: Math.random(),
    };
    context.AddItems(Medicine);
  };

  return (
    <div className={classes.form}>
      <h1>
        Admin Portal
        <Button className={classes.cartbtn} onClick={enable}>
          Cart {context.Cart.length}
        </Button>
      </h1>
      <form onSubmit={SubmitHandler}>
        {/* <div > */}
        <Input
          label="Medicine Name"
          type="text"
          placeholder="Name"
          name="MedicineName"
        />

        <Input label="Price" type="number" placeholder="price" name="Price" />

        <Input label="Qty" type="number" placeholder="Quantity" name="Qty" />

        <Button type="submit" className={classes.btn}>
          Add Product
        </Button>
        {/* </div> */}
      </form>
    </div>
  );
};
export default Form;

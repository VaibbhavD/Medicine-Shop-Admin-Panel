import React, { useContext } from "react";
import Context from "../Store/Context";
import ShowItems from "./ShowItems";

const Items = () => {
  const context = useContext(Context);

  return (
    <>
      {context.Items.map((item) => (
        <ul>
          <ShowItems item={item} />
        </ul>
      ))}
    </>
  );
};
export default Items;
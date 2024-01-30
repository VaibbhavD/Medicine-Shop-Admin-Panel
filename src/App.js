import "./App.css";
import Header from "./Components/Header/Header";
import Items from "./Components/Items";
import Cart from "./Cart/Cart";
import { useState } from "react";

function App() {
  const [show, setshow] = useState(false);

  const enableshow = () => {
    setshow(true);
  };

  const diesableshow = () => {
    setshow(false);
  };

  return (
    <>
      {show && <Cart enableshow={enableshow} diesableshow={diesableshow} />}
      <Header enableshow={enableshow} />
      <hr></hr>
      <Items />
    </>
  );
}

export default App;

import { useState } from "react";
import { Cart } from "./components/Cart";
import data from "./components/data.json";
import "./styles.css";

export default function App() {
  const [show, setShow] = useState(true);

  function formatDate(date) {
    return [date.getDate(), date.getMonth(), date.getFullYear()].join("/");
  }
  const timestamp = new Date().getTime();
  const cartDate = formatDate(new Date(timestamp));

  return (
    <div className="App">
      {show ? (
        <Cart cartDate={cartDate} data={data[0]} />
      ) : (
        <Cart cartDate={cartDate} data={data[1]} />
      )}
      <button
        className={show ? "amazon-cart-btn" : "aplle-cart-btn"}
        onClick={() => setShow(!show)}
      >
        {" "}
        {show ? "Show Apple Cart" : "Show Amazon Cart"}
      </button>
    </div>
  );
}

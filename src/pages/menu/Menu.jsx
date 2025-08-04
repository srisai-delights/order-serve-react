import React from "react";
import Beverages from "./Beverages";
import Biryani from "./Biryani";
import Curries from "./Curries";
import Desserts from "./Desserts";
import Snacks from "./Snacks";
import Tandoori from "./Tandoori";

function Menu({ cart, setCart }) {
  return (
    <>
      <Biryani cart={cart} setCart={setCart} />
      <Beverages cart={cart} setCart={setCart} />
      <Curries cart={cart} setCart={setCart} />
      <Desserts cart={cart} setCart={setCart} />
      <Snacks cart={cart} setCart={setCart} />
      <Tandoori cart={cart} setCart={setCart} />
    </>
  );
}

export default Menu;

import DessertItems from "../../assets/configuration/dessertItems.json";
import FoodItemGrid from "../../components/FoodItemGrid";
import "./css/FoodMenu.css";
import BreadHalwa from "../../assets/desserts/breadHalwa.jpg";
import Brownie from "../../assets/desserts/brownie.jpg";
import GulabJamun from "../../assets/desserts/gulabJamun.jpg";
import GulabJamunDry from "../../assets/desserts/gulabJamunDry.jpg";
import Laddu from "../../assets/desserts/laddu.jpg";
import MysorePak from "../../assets/desserts/mysorePak.jpg";
import PalKova from "../../assets/desserts/palKova.jpg";
import Rasamalai from "../../assets/desserts/rasamalai.jpg";
import RavaLaddu from "../../assets/desserts/ravaLaddu.jpg";
import WheatHalwa from "../../assets/desserts/wheatHalwa.jpg";
import { useEffect, useState } from "react";

const localImages = {
  "breadHalwa.jpg": BreadHalwa,
  "brownie.jpg": Brownie,
  "gulabJamun.jpg": GulabJamun,
  "gulabJamunDry.jpg": GulabJamunDry,
  "laddu.jpg": Laddu,
  "mysorePak.jpg": MysorePak,
  "palKova.jpg": PalKova,
  "rasamalai.jpg": Rasamalai,
  "ravaLaddu.jpg": RavaLaddu,
  "wheatHalwa.jpg": WheatHalwa,
};

const Desserts = ({ cart, setCart }) => {
  const [items, setItems] = useState([]);
  // localStorage.removeItem("menuItems");
  useEffect(() => {
    const storedItems = localStorage.getItem("combinedMenuItems");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    } else {
      setItems(DessertItems);
    }
  }, []);

  const filteredItems = items.filter((item) => item.category === "Desserts");
  return (
    <div className="food-item-container">
      <h2 className="food-item-section">Dessert Specials</h2>
      <FoodItemGrid
        items={filteredItems}
        localImages={localImages}
        cart={cart}
        setCart={setCart}
      />
    </div>
  );
};

export default Desserts;

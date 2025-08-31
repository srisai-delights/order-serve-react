import "./css/FoodMenu.css";
import FoodItemGrid from "../../components/FoodItemGrid";
import CurryItems from "../../assets/configuration/curryItems.json";
import ChickenCurry from "../../assets/curries/chickenCurry.jpg";
import ChickenKorma from "../../assets/curries/chickenKorma.jpg";
import LambCurry from "../../assets/curries/lambCurry.jpg";
import LambKorma from "../../assets/curries/lambKorma.jpg";
import PrawnCurry from "../../assets/curries/prawnCurry.jpg";
import PrawnKorma from "../../assets/curries/prawnKorma.jpg";
import FishCurry from "../../assets/curries/fishCurry.jpg";
import PaneerCurry from "../../assets/curries/paneerCurry.jpg";
import VegetableCurry from "../../assets/curries/vegetableCurry.jpg";
import VegetableKorma from "../../assets/curries/vegetableKorma.jpg";
import { useEffect, useState } from "react";


const localImages = {
  "chickenCurry.jpg": ChickenCurry,
  "chickenKorma.jpg": ChickenKorma,
  "lambCurry.jpg": LambCurry,
  "lambKorma.jpg": LambKorma,
  "prawnCurry.jpg": PrawnCurry,
  "prawnKorma.jpg": PrawnKorma,
  "fishCurry.jpg": FishCurry,
  "paneerCurry.jpg": PaneerCurry,
  "vegetableCurry.jpg": VegetableCurry,
  "vegetableKorma.jpg": VegetableKorma,
};

const Curries = ({ cart, setCart }) => {
  const [items, setItems] = useState([]);
  // localStorage.removeItem("menuItems");
  useEffect(() => {
    const storedItems = localStorage.getItem("combinedMenuItems");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    } else {
      setItems(CurryItems);
    }
  }, []);

  const filteredItems = items.filter((item) => item.category === "Curries");
  return (
    <div className="food-item-container">
      <h2 className="food-item-section">Curries Specials</h2>
      <FoodItemGrid
        items={filteredItems}
        localImages={localImages}
        cart={cart}
        setCart={setCart}
      />
    </div>
  );
};

export default Curries;

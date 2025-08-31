import TandooriItems from "../../assets/configuration/tandooriItems.json";
import FoodItemGrid from "../../components/FoodItemGrid";
import "./css/FoodMenu.css";
import ChickenTandoori from "../../assets/tandoori/chickenTandoori.jpeg";
import LambKebabs from "../../assets/tandoori/lambKebabs.jpeg";
import PannerTandoori from "../../assets/tandoori/pannerTandoori.jpeg";
import FishTandoori from "../../assets/tandoori/fishTandoori.jpg";
import GrillChicken from "../../assets/tandoori/grillChicken.jpg";
import { useEffect, useState } from "react";

const localImages = {
  "chickenTandoori.jpg": ChickenTandoori,
  "lambKebabs.jpg": LambKebabs,
  "pannerTandoori.jpg": PannerTandoori,
  "fishTandoori.jpg": FishTandoori,
  "grillChicken.jpg": GrillChicken,
};

const Tandoori = ({ cart, setCart }) => {
  const [items, setItems] = useState([]);
  // localStorage.removeItem("menuItems");
  useEffect(() => {
    const storedItems = localStorage.getItem("combinedMenuItems");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    } else {
      setItems(TandooriItems);
    }
  }, []);

  const filteredItems = items.filter((item) => item.category === "Tandoori");
  return (
    <div className="food-item-container">
      <h2 className="food-item-section">Tandoori Specials</h2>
      <FoodItemGrid
        items={filteredItems}
        localImages={localImages}
        cart={cart}
        setCart={setCart}
      />
    </div>
  );
};

export default Tandoori;

import BeverageItems from "../../assets/configuration/beverageItems.json";
import FoodItemGrid from "../../components/FoodItemGrid";
import "./css/FoodMenu.css";
import FilterCoffee from "../../assets/beverages/filterCoffee.jpeg";
import GreenTea from "../../assets/beverages/greenTea.jpeg";
import Lassi from "../../assets/beverages/lassi.jpeg";
import MangoLassi from "../../assets/beverages/mangoLassi.jpeg";
import MangoMilkShake from "../../assets/beverages/mangoMilkShake.jpeg";
import MasalaChai from "../../assets/beverages/masalaChai.jpeg";
import Mojito from "../../assets/beverages/mojito.jpeg";
import CardamomTea from "../../assets/beverages/cardamomTea.jpeg";

const localImages = {
  "filterCoffee.jpg": FilterCoffee,
  "greenTea.jpg": GreenTea,
  "lassi.jpg": Lassi,
  "mangoLassi.jpg": MangoLassi,
  "mangoMilkShake.jpg": MangoMilkShake,
  "masalaChai.jpg": MasalaChai,
  "mojito.jpg": Mojito,
  "cardamomTea.jpeg": CardamomTea,
};

const Beverages = ({ cart, setCart }) => {
  return (
    <div className="food-item-container">
      <h2 className="food-item-section">Beverages Specials</h2>
      <FoodItemGrid
        items={BeverageItems}
        localImages={localImages}
        cart={cart}
        setCart={setCart}
      />
    </div>
  );
};

export default Beverages;

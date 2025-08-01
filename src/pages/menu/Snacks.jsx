import SnackItems from "../../assets/configuration/snackItems.json";
import FoodItemGrid from "../../components/FoodItemGrid";
import "./css/FoodMenu.css";
import ChickenRoll from "../../assets/snacks/chickenRoll.jpeg";
import ChilliBajji from "../../assets/snacks/chilliBajji.jpeg";
import EggPuffs from "../../assets/snacks/eggPuffs.jpeg";
import LambRoll from "../../assets/snacks/lambRoll.jpeg";
import Murukku from "../../assets/snacks/murukku.jpeg";
import OnionBajji from "../../assets/snacks/onionBajji.jpeg";
import PotatoBajji from "../../assets/snacks/potatoBajji.jpeg";
import SamosaChicken from "../../assets/snacks/samosaChicken.jpeg";
import SamosaLamb from "../../assets/snacks/samosaLamb.jpeg";
import Samosa from "../../assets/snacks/samosaVeg.jpeg";
import SpringRoll from "../../assets/snacks/springRoll.jpeg";
import Thattai from "../../assets/snacks/thattai.jpeg";

const localImages = {
  "chickenRoll.jpg": ChickenRoll,
  "chilliBajji.jpg": ChilliBajji,
  "eggPuffs.jpg": EggPuffs,
  "lambRoll.jpg": LambRoll,
  "murukku.jpg": Murukku,
  "onionBajji.jpg": OnionBajji,
  "potatoBajji.jpg": PotatoBajji,
  "samosaChicken.jpg": SamosaChicken,
  "samosaLamb.jpg": SamosaLamb,
  "samosaVeg.jpg": Samosa,
  "springRoll.jpg": SpringRoll,
  "thattai.jpg": Thattai,
};

const Snacks = ({ cart, setCart }) => {
  return (
    <div className="food-item-container">
      <h2 className="food-item-section">Snacks Specials</h2>
      <FoodItemGrid
        items={SnackItems}
        localImages={localImages}
        cart={cart}
        setCart={setCart}
      />
    </div>
  );
};

export default Snacks;

import "./css/FoodMenu.css";
import FoodItemGrid from "../../components/FoodItemGrid";
import originalItems from "../../assets/configuration/biryaniItems.json";
import { useEffect, useState } from "react";
import BiryaniItems from "../../assets/configuration/biryaniItems.json";
import ChickenBiryani from '../../assets/biryani/chicken.jpg';
import HyderabadChicken from '../../assets/biryani/hyderabadChicken.jpg';
import DindigulChicken from '../../assets/biryani/dindigulChicken.jpg';
import LambBiryani from '../../assets/biryani/lamb.jpg';
import HyderabadLamb from '../../assets/biryani/hyderabadLamb.jpg';
import DindigulLamb from '../../assets/biryani/dindigulLamb.jpg';
import FishBiryani from '../../assets/biryani/fish.jpg';
import PrawnBiryani from '../../assets/biryani/prawn.jpg';
import VegBiryani from '../../assets/biryani/vegetable.jpg';
import PannerBiryani from '../../assets/biryani/panner.jpg';
import MealMakerBiryani from '../../assets/biryani/mealMaker.jpg';
import EggBiryani from '../../assets/biryani/eggBiryani.jpg';
import MushroomBiryani from '../../assets/biryani/mushroomBiryani.jpg';

// Local images
import ChickenBiryani from "../../assets/biryani/chicken.jpg";
import HyderabadChicken from "../../assets/biryani/hyderabadChicken.jpg";
import DindigulChicken from "../../assets/biryani/dindigulChicken.jpg";
import LambBiryani from "../../assets/biryani/lamb.jpg";
import HyderabadLamb from "../../assets/biryani/hyderabadLamb.jpg";
import DindigulLamb from "../../assets/biryani/dindigulLamb.jpg";
import FishBiryani from "../../assets/biryani/fish.jpg";
import PrawnBiryani from "../../assets/biryani/prawn.jpg";
import VegBiryani from "../../assets/biryani/vegetable.jpg";
import PannerBiryani from "../../assets/biryani/panner.jpg";
import MealMakerBiryani from "../../assets/biryani/mealMaker.jpg";
import EggBiryani from "../../assets/biryani/eggBiryani.jpg";
import MushroomBiryani from "../../assets/biryani/mushroomBiryani.jpg";

// Image mapping
const localImages = {
  "biryaniChicken.jpg": ChickenBiryani,
  "hyderabadiBiryaniChicken.jpg": HyderabadChicken,
  "dindigulBiriyaniChicken.jpg": DindigulChicken,
  "biryaniLamb.jpg": LambBiryani,
  "hyderabadiBiryaniLamb.jpg": HyderabadLamb,
  "dindigulBiriyaniLamb.jpg": DindigulLamb,
  "biryaniFish.jpg": FishBiryani,
  "biryaniPrawn.jpg": PrawnBiryani,
  "biryaniVeg.jpg": VegBiryani,
  "biryaniPanner.jpg": PannerBiryani,
  "biryaniMealMaker.jpg": MealMakerBiryani,
  "eggBiryani.jpg": EggBiryani,
  "mushroomBiryani.jpg": MushroomBiryani,
};

const Biryani = ({ cart, setCart }) => {
  const [items, setItems] = useState([]);
  // localStorage.removeItem("menuItems");
  useEffect(() => {
    const storedItems = localStorage.getItem("combinedMenuItems");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    } else {
      setItems(originalItems);
    }
  }, []);

  const filteredItems = items.filter((item) => item.category === "Biryani");
  return (
    <div className="food-item-container">
      <h2 className="food-item-section">Biryani Specials</h2>
      <FoodItemGrid
        items={filteredItems}
        localImages={localImages}
        cart={cart}
        setCart={setCart}
      />
    </div>
  );
};

export default Biryani;

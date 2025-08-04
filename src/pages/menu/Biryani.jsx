import './css/FoodMenu.css'
import FoodItemGrid from "../../components/FoodItemGrid";
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
import MushroomBiryani from '../../assets/biryani/mushroomBiryani.jpeg';

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
    "mushroomBiryani.jpg": MushroomBiryani
};

const Biryani = ({ cart, setCart }) => {

    return (
        <div className="food-item-container">
            <h2 className="food-item-section">Biryani Specials</h2>
            <FoodItemGrid
                items={BiryaniItems}
                localImages={localImages}
                cart={cart}
                setCart={setCart}
            />
        </div>
    );
};

export default Biryani;
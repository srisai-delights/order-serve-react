import './css/FoodMenu.css'
import FoodItemGrid from "../../components/FoodItemGrid";
import CurryItems from "../../assets/configuration/curryItems.json";
import ChickenCurry from '../../assets/curries/chickenCurry.jpg';
import ChickenKorma from '../../assets/curries/chickenKorma.jpg';
import LambCurry from '../../assets/curries/lambCurry.jpg';
import LambKorma from '../../assets/curries/lambKorma.jpg';
import PrawnCurry from '../../assets/curries/prawnCurry.jpg';
import PrawnKorma from '../../assets/curries/prawnKorma.jpg';
import FishCurry from '../../assets/curries/fishCurry.jpg';
import PaneerCurry from '../../assets/curries/paneerCurry.jpg';
import VegetableCurry from '../../assets/curries/vegetableCurry.jpg';
import VegetableKorma from '../../assets/curries/vegetableKorma.jpg';


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

    const handleAddToCart = (item) => {
        setCart([...cart, item]);
    };

    const getCartTotal = () => {
        return cart.reduce((sum, item) => sum + parseFloat(item.price), 0).toFixed(2);
    };

    return (
        <div className="food-item-container">
            <h2 className="food-item-section">Curries Specials</h2>
            <FoodItemGrid
                items={CurryItems}
                category="Curries"
                onAddToCart={handleAddToCart}
                localImages={localImages}
            />
        </div>
    );
};

export default Curries;
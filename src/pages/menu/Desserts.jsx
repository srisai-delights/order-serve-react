import DessertItems from "../../assets/configuration/dessertItems.json";
import FoodItemGrid from "../../components/FoodItemGrid";
import './css/FoodMenu.css'
import BreadHalwa from '../../assets/desserts/breadHalwa.jpg';
import Brownie from '../../assets/desserts/brownie.jpg';
import GulabJamun from '../../assets/desserts/gulabJamun.jpg';
import GulabJamunDry from '../../assets/desserts/gulabJamunDry.jpg';
import Laddu from '../../assets/desserts/laddu.jpg';
import MysorePak from '../../assets/desserts/mysorePak.jpg';
import PalKova from '../../assets/desserts/palKova.jpg';
import Rasamalai from '../../assets/desserts/rasamalai.jpg';
import RavaLaddu from '../../assets/desserts/ravaLaddu.jpg';
import WheatHalwa from '../../assets/desserts/wheatHalwa.jpg';


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

    const handleAddToCart = (item) => {
        setCart([...cart, item]);
    };

    const getCartTotal = () => {
        return cart.reduce((sum, item) => sum + parseFloat(item.price), 0).toFixed(2);
    };

    return (
        <div className="food-item-container">
            <h2 className="food-item-section">Dessert Specials</h2>
            <FoodItemGrid
                items={DessertItems}
                category="Desserts"
                onAddToCart={handleAddToCart}
                localImages={localImages}
            />
        </div>
    );
};

export default Desserts;
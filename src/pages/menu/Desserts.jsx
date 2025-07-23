import DessertItems from "../../assets/configuration/dessertItems.json";
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

    const renderItems = () => (
        <div className="food-item-grid">
            {DessertItems
                .filter(item => item.category === "Desserts")
                .map((item, index) => (
                <div key={index} className="food-item-tile">
                    <h3 className="food-item-name">{item.name}</h3>
                    <div className="food-item-image-container">
                        <img
                            src={item.image?.startsWith("http")
                                ? item.image
                                    : localImages[item.image] || BreadHalwa}
                            alt={item.name}
                            className="food-item-image"
                        />
                    </div>
                    <div className="food-item-details">
                        <p className="food-item-description">{item.description}</p>
                        <div className="food-item-bottom">
                            <span className="food-item-price">{item.price} kr</span>
                            <button
                                className="cart-button"
                                onClick={() => handleAddToCart(item)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

    if (!DessertItems.length) return <p>No desserts items found.</p>;

    return (
        <div className="food-item-container">
            <h2 className="food-item-section">Desserts Specials</h2>
            {renderItems()}
        </div>
    );
};

export default Desserts;
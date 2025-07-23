import SnackItems from "../../assets/configuration/snackItems.json";
import './css/FoodMenu.css'
import ChickenRoll from '../../assets/snacks/chickenRoll.jpeg';
import ChilliBajji from '../../assets/snacks/chilliBajji.jpeg';
import EggPuffs from '../../assets/snacks/eggPuffs.jpeg';
import LambRoll from '../../assets/snacks/lambRoll.jpeg';
import Murukku from '../../assets/snacks/murukku.jpeg';
import OnionBajji from '../../assets/snacks/onionBajji.jpeg';
import PotatoBajji from '../../assets/snacks/potatoBajji.jpeg';
import SamosaChicken from '../../assets/snacks/samosaChicken.jpeg';
import SamosaLamb from '../../assets/snacks/samosaLamb.jpeg';
import Samosa from '../../assets/snacks/samosaVeg.jpeg';
import SpringRoll from '../../assets/snacks/springRoll.jpeg';
import Thattai from '../../assets/snacks/thattai.jpeg';


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

    const handleAddToCart = (item) => {
        setCart([...cart, item]);
    };

    const getCartTotal = () => {
        return cart.reduce((sum, item) => sum + parseFloat(item.price), 0).toFixed(2);
    };

    const renderItems = () => (
        <div className="food-item-grid">
            {SnackItems
                .filter(item => item.category === "Snacks")
                .map((item, index) => (
                <div key={index} className="food-item-tile">
                    <h3 className="food-item-name">{item.name}</h3>
                    <div className="food-item-image-container">
                        <img
                            src={item.image?.startsWith("http")
                                ? item.image
                                    : localImages[item.image] || ChickenRoll}
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

    if (!SnackItems.length) return <p>No snacks items found.</p>;

    return (
        <div className="food-item-container">
            <h2 className="food-item-section">Snacks Specials</h2>
            {renderItems()}
        </div>
    );
};

export default Snacks;
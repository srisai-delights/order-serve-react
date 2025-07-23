import './css/FoodMenu.css'
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

    const renderItems = () => (
        <div className="food-item-grid">
            {CurryItems
                .filter(item => item.category === "Curries")
                .map((item, index) => (
                <div key={index} className="food-item-tile">
                    <h3 className="food-item-name">{item.name}</h3>
                    <div className="food-item-image-container">
                        <img
                            src={item.image?.startsWith("http")
                                ? item.image
                                : localImages[item.image] || VegetableCurry}
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

    if (!CurryItems.length) return <p>No curries items found.</p>;


    return (
        <div className="food-item-container">
            <h2 className="food-item-section">Curries Specials</h2>
            {renderItems()}
        </div>
    );
};

export default Curries;
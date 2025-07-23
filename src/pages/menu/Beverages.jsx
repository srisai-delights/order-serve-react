import BeverageItems from "../../assets/configuration/beverageItems.json";
import './css/FoodMenu.css'
import FilterCoffee from '../../assets/beverages/filterCoffee.jpeg';
import GreenTea from '../../assets/beverages/greenTea.jpeg';
import Lassi from '../../assets/beverages/lassi.jpeg';
import MangoLassi from '../../assets/beverages/mangoLassi.jpeg';
import MangoMilkShake from '../../assets/beverages/mangoMilkShake.jpeg';
import MasalaChai from '../../assets/beverages/masalaChai.jpeg';
import Mojito from '../../assets/beverages/mojito.jpeg';


const localImages = {
    "filterCoffee.jpg": FilterCoffee,
    "greenTea.jpg": GreenTea,
    "lassi.jpg": Lassi,
    "mangoLassi.jpg": MangoLassi,
    "mangoMilkShake.jpg": MangoMilkShake,
    "masalaChai.jpg": MasalaChai,
    "mojito.jpg": Mojito
};

const Beverages = ({ cart, setCart }) => {

    const handleAddToCart = (item) => {
        setCart([...cart, item]);
    };

    const getCartTotal = () => {
        return cart.reduce((sum, item) => sum + parseFloat(item.price), 0).toFixed(2);
    };

    const renderItems = () => (
        <div className="food-item-grid">
            {BeverageItems
                .filter(item => item.category === "Beverages")
                .map((item, index) => (
                <div key={index} className="food-item-tile">
                    <h3 className="food-item-name">{item.name}</h3>
                    <div className="food-item-image-container">
                        <img
                            src={item.image?.startsWith("http")
                                ? item.image
                                    : localImages[item.image] || FilterCoffee}
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

    if (!BeverageItems.length) return <p>No beverages items found.</p>;

    return (
        <div className="food-item-container">
            <h2 className="food-item-section">Beverages Specials</h2>
            {renderItems()}
        </div>
    );
};

export default Beverages;
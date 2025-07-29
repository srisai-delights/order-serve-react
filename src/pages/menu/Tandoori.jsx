import TandooriItems from "../../assets/configuration/tandooriItems.json";
import FoodItemGrid from "../../components/FoodItemGrid";
import './css/FoodMenu.css'
import ChickenTandoori from '../../assets/tandoori/chickenTandoori.jpeg';
import LambKebabs from '../../assets/tandoori/lambKebabs.jpeg';
import PannerTandoori from '../../assets/tandoori/pannerTandoori.jpeg';



const localImages = {
    "chickenTandoori.jpg": ChickenTandoori,
    "lambKebabs.jpg": LambKebabs,
    "pannerTandoori.jpg": PannerTandoori
};

const Tandoori = ({ cart, setCart }) => {
    const handleAddToCart = (item) => {
        setCart([...cart, item]);
    };

    const getCartTotal = () => {
        return cart.reduce((sum, item) => sum + parseFloat(item.price), 0).toFixed(2);
    };

    const renderItems = () => (
        <div className="food-item-grid">
            {TandooriItems
                .filter(item => item.category==="Tandoori")
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

    if (!TandooriItems.length) return <p>No tandoori items found.</p>;

    return (
        <div className="food-item-container">
            <h2 className="food-item-section">Tandoori Specials</h2>
            <FoodItemGrid
                items={TandooriItems}
                category="Tandoori"
                onAddToCart={handleAddToCart}
                localImages={localImages}
            />
        </div>
    );
};

export default Tandoori;
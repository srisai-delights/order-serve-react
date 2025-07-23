import './css/FoodMenu.css'
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
};

const Biryani = ({ cart, setCart }) => {

    const handleAddToCart = (item) => {
        setCart([...cart, item]);
    };

    const getCartTotal = () => {
        return cart.reduce((sum, item) => sum + parseFloat(item.price), 0).toFixed(2);
    };

    const renderItems = () => (
        <div className="food-item-grid">
            {BiryaniItems
                .filter(item => item.category === "Biryani")
                .map((item, index) => (
                <div key={index} className="food-item-tile">
                    <h3 className="food-item-name">{item.name}</h3>
                    <div className="food-item-image-container">
                        <img
                            src={item.image?.startsWith("http")
                                ? item.image
                                : localImages[item.image] || VegBiryani}
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

    if (!BiryaniItems.length) return <p>No biryani items found.</p>;

    return (
        <div className="food-item-container">
            <h2 className="food-item-section">Biryani Specials</h2>
            {renderItems()}
        </div>
    );
};

export default Biryani;
import VegBiryani from '../assets/biryani/vegetable.jpg';
import './FoodItemGrid.css'; 

const FoodItemGridOld = ({ items, category, onAddToCart, localImages }) => {
    const filteredItems = items.filter(item => item.category === category && item.isVisible);

    if (!filteredItems.length) return <p>No items found in {category} category.</p>;

    return (
        <div className="food-item-grid">
            {filteredItems.map((item, index) => (
                    <div key={index} className="food-item-tile">
                    <h3 className="food-item-name">{item.name}</h3>
                    <div className="food-item-image-container">
                        <img
                            src={
                                item.image?.startsWith("http")
                                    ? item.image
                                    : localImages[item.image] || VegBiryani
                            }
                            alt={item.name}
                            className="food-item-image"
                        />
                        {!item.isAvailable && (
                            <div className="sold-out-overlay">Sold Out</div>
                        )}
                    </div>
                    <div className="food-item-details">
                        <p className="food-item-description">{item.description}</p>
                        <div className="food-item-bottom">
                            <span className="food-item-price">{item.price} kr</span>
                            <button
                                className={`cart-button ${!item.isAvailable ? 'sold-out' : ''}`}
                                onClick={() => onAddToCart(item)}
                                disabled={!item.isAvailable}
                            >
                                {item.isAvailable ? "Add to Cart" : "Sold Out"}
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FoodItemGridOld;
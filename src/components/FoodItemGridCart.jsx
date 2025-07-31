import VegBiryani from '../assets/biryani/vegetable.jpg';
import './FoodItemGrid.css'; 

const FoodItemGridCart = ({ items, category, onAddToCart, onRemoveFromCart, localImages, cart }) => {
    const filteredItems = items.filter(item => item.category === category && item.isVisible);

    const getQuantity = (itemId) => {
        const cartItem = cart.find(ci => ci.id === itemId);
        return cartItem ? cartItem.quantity : 0;
    };

    if (!filteredItems.length) return <p>No items found in {category} category.</p>;

    return (
        <div className="food-item-grid">
            {filteredItems.map((item, index) => {
                const quantity = getQuantity(item.id);
                return (
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
                            {quantity > 0 && (
                                <div className="quantity-badge">{quantity}</div>
                            )}
                        </div>
                        <div className="food-item-details">
                            <p className="food-item-description">{item.description}</p>
                            <div className="food-item-bottom">
                                <span className="food-item-price">{item.price} kr</span>
                                {item.isAvailable ? (
                                    quantity > 0 ? (
                                        <div className="quantity-controls">
                                            <button onClick={() => onRemoveFromCart(item)} disabled={quantity <= 1}>-</button>
                                            <span>{quantity}</span>
                                            <button onClick={() => onAddToCart(item)} disabled={quantity >= 10}>+</button>
                                        </div>
                                    ) : (
                                        <button
                                            className="cart-button"
                                            onClick={() => onAddToCart(item)}
                                        >
                                            Add to Cart
                                        </button>
                                    )
                                ) : (
                                    <button className="cart-button sold-out" disabled>
                                        Sold Out
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default FoodItemGridCart;
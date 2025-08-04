import "./SpecialMenuCard.css";
import VegBiryani from "../assets/biryani/vegetable.jpg";
import { useState } from "react";

const SpecialMenuCard = ({
  items,
  localImages,
  cart,
  setCart,
  columnWidth,
  rowHeight,
}) => {
  const [style, setStyle] = useState({});
  console.log("length" + items.length);
  const filteredItems = items.filter((item) => item.isVisible);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 6;
    const rotateY = ((x - centerX) / centerX) * 6;

    setStyle({
      transform: `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`,
      transition: "transform 0.1s ease-out",
    });
  };

  const resetStyle = () => {
    setStyle({
      transform: "rotateX(0deg) rotateY(0deg) scale(1)",
      transition: "transform 0.4s ease",
    });
  };

  const onAddToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((ci) => ci.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const onRemoveFromCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((ci) => ci.id === item.id);
      if (!existing) return prev;

      if (existing.quantity === 1) {
        return prev.filter((ci) => ci.id !== item.id);
      }

      return prev.map((ci) =>
        ci.id === item.id ? { ...ci, quantity: ci.quantity - 1 } : ci
      );
    });
  };

  const getQuantity = (itemId) => {
    const cartItem = cart.find((ci) => ci.id === itemId);
    return cartItem ? cartItem.quantity : 0;
  };

  if (!filteredItems.length)
    return <p>No items found in {category} category.</p>;

  return (
    <div
      className={"special-menu-grid"}
      style={{
        "--column-width": `${columnWidth}px`,
        "--row-height": `${rowHeight}px`,
      }}
    >
      {filteredItems.map((item, index) => {
        const quantity = getQuantity(item.id);
        return (
          <div
            key={index}
            className={`menu-card ${!item.isAvailable ? "sold-out" : ""}`}
            style={style}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetStyle}
          >
            <h3>{item.name}</h3>
            <div className="menu-card-inner">
              <img
                src={
                  item.image?.startsWith("http")
                    ? item.image
                    : localImages[item.image] || VegBiryani
                }
                alt={item.name}
              />
              <div className="overlay">
                <div className="overlay-text">
                  <p>{item.description}</p>
                  <div className="price-cart-row">
                    <span className="price-tag">₹{item.price}</span>
                    {item.isAvailable ? (
                      quantity > 0 ? (
                        <div className="quantity-controls">
                          <button
                            onClick={() => onRemoveFromCart(item)}
                            disabled={quantity <= 1}
                          >
                            −
                          </button>
                          <span>{quantity}</span>
                          <button
                            onClick={() => onAddToCart(item)}
                            disabled={quantity >= 10}
                          >
                            +
                          </button>
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
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SpecialMenuCard;

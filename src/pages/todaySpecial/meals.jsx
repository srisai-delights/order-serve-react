import SpecialMenuCard from "../../components/SpecialMenuCard";
import DailyItems from "../../assets/configuration/dailyItems.json";
import ChickenBiryani from "../../assets/biryani/chicken.jpg";
import LambBiryani from "../../assets/biryani/lamb.jpg";
import VegBiryani from "../../assets/biryani/lamb.jpg";

const localImages = {
  "lambDaily.jpg": LambBiryani,
  "chickenDaily.jpg": ChickenBiryani,
  "vegetarianDaily.jpg": VegBiryani,
};

const Meals = ({ cart, setCart }) => {
  return (
    <>
      <div className="fancy-container">
        <h2>🍛 Daily Meals</h2>
        <SpecialMenuCard
          items={DailyItems}
          localImages={localImages}
          cart={cart}
          setCart={setCart}
          columnWidth={220}
          rowHeight={300}
        />
      </div>
    </>
  );
};

export default Meals;

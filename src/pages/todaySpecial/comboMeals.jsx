import SpecialMenuCard from "../../components/SpecialMenuCard";
import ComboItems from "../../assets/configuration/comboItems.json";
import ChickenCombo from "../../assets/todaySpecial/chickenCombo.jpg";
import HyderabadiChickenCombo from "../../assets/todaySpecial/hyderabadiChickenCombo.png";
import LambCombo from "../../assets/todaySpecial/lambCombo.png";
import MuttonCombo from "../../assets/todaySpecial/muttonCombo.jpg";
import ChickenBiryani from "../../assets/biryani/chicken.jpg";
import LambBiryani from "../../assets/biryani/lamb.jpg";
import VegBiryani from "../../assets/biryani/vegetable.jpg";

const localImages = {
  "chickenCombo.jpg": ChickenCombo,
  "hyderabadiChickenCombo.png": HyderabadiChickenCombo,
  "lambCombo.png": LambCombo,
  "muttonCombo.jpg": MuttonCombo,
  "lambDaily.jpg": LambBiryani,
  "chickenDaily.jpg": ChickenBiryani,
  "vegetarianDaily.jpg": VegBiryani,
};

const ComboMeals = ({ cart, setCart }) => {
  return (
    <>
      <div className="fancy-container">
        <h2>🍛 Combo Meals</h2>
        <SpecialMenuCard
          items={ComboItems}
          localImages={localImages}
          cart={cart}
          setCart={setCart}
          columnWidth={440}
          rowHeight={500}
        />
      </div>
    </>
  );
};

export default ComboMeals;

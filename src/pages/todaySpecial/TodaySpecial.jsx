import ComboMeals from "./comboMeals";
import Meals from "./meals";

const TodaySpecial = ({ cart, setCart }) => {
  return (
    <>
      <ComboMeals cart={cart} setCart={setCart} />
      {<Meals cart={cart} setCart={setCart} />}
    </>
  );
};

export default TodaySpecial;

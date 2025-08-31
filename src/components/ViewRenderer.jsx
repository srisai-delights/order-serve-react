import { useLocation } from "react-router-dom";

// Home
import Home from "../pages/home/Home";
import Features from "../pages/home/Features";
import Gallery from "../pages/home/Gallery";
import Testimonials from "../pages/home/Testimonials";
import Welcome from "../pages/home/Welcome";

// Today's Special
import TodaySpecial from "../pages/todaySpecial/TodaySpecial";
import TodaySpecialMeals from "../pages/todaySpecial/meals";
import TodaySpecialCombo from "../pages/todaySpecial/comboMeals";

// Menu
import Menu from "../pages/menu/Menu";
import Biryani from "../pages/menu/Biryani";
import Curries from "../pages/menu/Curries";
import Desserts from "../pages/menu/Desserts";
import Snacks from "../pages/menu/Snacks";
import Tandoori from "../pages/menu/Tandoori";
import Beverages from "../pages/menu/Beverages";
import MenuManager from "../pages/menu/MenuManager";

// Services
import Services from "../pages/services/Services";
import Catering from "../pages/services/Catering";
import Takeaway from "../pages/services/Takeaway";
import Delivery from "../pages/services/Delivery";
import OnlineOrder from "../pages/services/OnlineOrder";

// About
import About from "../pages/about/About";
import OurMission from "../pages/about/OurMission";
import OurStory from "../pages/about/OurStory";

// Contact
import Contact from "../pages/contact/Contact";
import ContactUs from "../pages/contact/ContactUs";
import Feedback from "../pages/contact/Feedback";
import Support from "../pages/contact/Support";

const routeComponentMap = {
  "/": Home,
  "/home": Home,
  "/home/features": Features,
  "/home/gallery": Gallery,
  "/home/testimonials": Testimonials,
  "/home/welcome": Welcome,

  "/today-special": TodaySpecial,
  "/today-special/meals": TodaySpecialMeals,
  "/today-special/combo-meals": TodaySpecialCombo,

  "/menu": Menu,
  "/menu/manager": MenuManager,
  "/menu/biryani": Biryani,
  "/menu/beverages": Beverages,
  "/menu/curries": Curries,
  "/menu/desserts": Desserts,
  "/menu/snacks": Snacks,
  "/menu/tandoori": Tandoori,

  "/services": Services,
  "/services/catering": Catering,
  "/services/takeaway": Takeaway,
  "/services/delivery": Delivery,
  "/services/online-ordering": OnlineOrder,

  "/about": About,
  "/about/our-mission": OurMission,
  "/about/our-story": OurStory,

  "/contact": Contact,
  "/contact/contact-us": ContactUs,
  "/contact/feedback": Feedback,
  "/contact/support": Support,
};

function ViewRenderer({ cart, setCart }) {
  const location = useLocation();
  const path = location.pathname.toLowerCase();
  console.log("Current path:", path);

  const Component = routeComponentMap[path];

  if (!Component) {
    return <h2 style={{ padding: "20px" }}>404 - Page Not Found</h2>;
  }

  const needsCart = [
    "/menu",
    "/menu/biryani",
    "/menu/beverages",
    "/menu/curries",
    "/menu/desserts",
    "/menu/snacks",
    "/menu/tandoori",
    "/services/catering",
    "/services/takeaway",
    "/services/delivery",
    "/services/online-ordering",
    "/today-special",
    "/today-special/meals",
    "/today-special/combo-meals",
  ];

  return needsCart.includes(path) ? (
    <Component cart={cart} setCart={setCart} />
  ) : (
    <Component />
  );
}

export default ViewRenderer;

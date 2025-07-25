import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import ViewRenderer from "./components/ViewRenderer";
import Checkout from './pages/Checkout';

function App() {
    const [cart, setCart] = useState([]);

    return (
        <Router>
            <Navbar cart={cart} />
            <div style={{ paddingTop: "60px" }}>
                <Routes>
                    <Route path="/*" element={<ViewRenderer cart={cart} setCart={setCart} />} />
                    <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart} />} />
                </Routes>
            </div>
        </Router>
    );
}
export default App;

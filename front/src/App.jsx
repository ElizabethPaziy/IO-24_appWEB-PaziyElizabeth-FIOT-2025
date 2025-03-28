import React from 'react';
import Navbar from "./Components/Navbar/Navbar.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Shop from "./Pages/Shop.jsx";
import ShopCategory from "./Pages/ShopCategory.jsx";
import LoginSignup from "./Pages/LoginSignup.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Product from "./Pages/Product.jsx";
import Cart from "./Pages/Cart.jsx";
import men_banner from "./Components/Assets/Photo/men_banner.png";
import women_banner from "./Components/Assets/Photo/women_banner.png";


const MyComponent = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path='/IO-24_appWEB-PaziyElizabeth-FIOT-2025' element={<Shop/>}/>
                    <Route path='/IO-24_appWEB-PaziyElizabeth-FIOT-2025/men' element={<ShopCategory banner={men_banner} category="men"/>}/>
                    <Route path='/IO-24_appWEB-PaziyElizabeth-FIOT-2025/women' element={<ShopCategory banner={women_banner} category="women"/>}/>
                    <Route path="/IO-24_appWEB-PaziyElizabeth-FIOT-2025/product" element={<Product/>}>
                        <Route path=':productId' element={<Product/>}/>
                    </Route>
                    <Route path='/IO-24_appWEB-PaziyElizabeth-FIOT-2025/cart' element={<Cart/>}/>
                    <Route path='/IO-24_appWEB-PaziyElizabeth-FIOT-2025/login' element={<LoginSignup/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
};

export default MyComponent;
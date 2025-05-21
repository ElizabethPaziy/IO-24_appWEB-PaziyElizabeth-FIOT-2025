import React, {useContext, useRef, useState} from 'react'
import './Navbar.css'
import lorence from '../Assets/Photo/lorence.svg'
import cart_icon from '../Assets/Photo/cart_icon.svg'
import {Link} from "react-router-dom";
import {ShopContext} from "../../Context/ShopContext.jsx";
import nav_dropdown from "../Assets/Photo/arrow-down-circle.svg"

const Navbar = () => {

    const [menu, setMenu] = useState("shop")
    const {getTotalCartItems} = useContext(ShopContext)
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle("nav-menu-visible");
        e.target.classList.toggle("open");
    }

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={lorence} alt="logo"/>
            </div>
            <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="nav-dropdown"/>
            <ul ref={menuRef} className="nav-menu">
                <li onClick={() => {
                    setMenu("shop")
                }}><Link style={{textDecoration: "none", color: "black"}}
                         to='/IO-24_appWEB-PaziyElizabeth-FIOT-2025'>shop</Link>{menu === "shop" ? <hr/> : <></>}</li>
                <li onClick={() => {
                    setMenu("men")
                }}><Link style={{textDecoration: "none", color: "black"}}
                         to='/IO-24_appWEB-PaziyElizabeth-FIOT-2025/men'>men</Link>{menu === "men" ? <hr/> : <></>}</li>
                <li onClick={() => {
                    setMenu("women")
                }}><Link style={{textDecoration: "none", color: "black"}}
                         to='/IO-24_appWEB-PaziyElizabeth-FIOT-2025/women'>women</Link>{menu === "women" ?
                    <hr/> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
                {localStorage.getItem("auth-token") ? <button className='nav-login-button' onClick={() => {
                    localStorage.removeItem('auth-token');
                    window.location.replace('/IO-24_appWEB-PaziyElizabeth-FIOT-2025')
                }}>logout
                </button> : <Link to='/IO-24_appWEB-PaziyElizabeth-FIOT-2025/login' className='nav-login-link'>
                    <div className='nav-login-button'>login</div>
                </Link>}
                <Link to='/IO-24_appWEB-PaziyElizabeth-FIOT-2025/cart'><img className="nav-cart_photo" src={cart_icon}
                                                                            alt="cart"/></Link>
                <div className='nav-cart-count'>
                    {getTotalCartItems()}
                </div>
            </div>
        </div>
    )
}
export default Navbar

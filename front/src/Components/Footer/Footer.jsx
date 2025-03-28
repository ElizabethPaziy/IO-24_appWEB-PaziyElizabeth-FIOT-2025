import React from 'react'
import './Footer.css'
import lorence from '../Assets/Photo/lorence.svg'
import instagram from '../Assets/Photo/instagram.svg'
import facebook from '../Assets/Photo/facebook.svg'
import twitter from '../Assets/Photo/twitter.svg'
import telegram from '../Assets/Photo/telegram.svg'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-logo'>
                <img className='footer-logo-photo' src={lorence} alt=""/>
            </div>
            <ul className='footer-links'>
                <li>Company</li>
                <li>Products</li>
                <li>Offline shops</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className='footer-social-icon'>
                <div className='footer-icons-container'>
                    <img className='footer-icon' src={facebook} alt=""/>
                </div>
                <div className='footer-icons-container'>
                    <img className='footer-icon' src={instagram} alt=""/>
                </div>
                <div className='footer-icons-container'>
                    <img className='footer-icon' src={telegram} alt=""/>
                </div>
                <div className='footer-icons-container'>
                    <img className='footer-icon' src={twitter} alt=""/>
                </div>
            </div>
            <div className='footer-copyright'>
                <hr/>
                <p>Lorence @ 2025 - All Right Reserved</p>
            </div>
        </div>
    )
}
export default Footer

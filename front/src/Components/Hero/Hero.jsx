import React from 'react'
import './Hero.css'
import arrow_icon from '../Assets/Photo/arrow_icon.svg'
import hero_img from '../Assets/Photo/hero_img.jpg'
const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <p>new</p>
                <p>cosmetic lines</p>
                <p>are waiting for you</p>
                <div className="hero-latest-btn">
                    <div>latest arrivals</div>
                    <img className="arrow_icon" src={arrow_icon} alt="Hero arrow icon"/>
                </div>
            </div>
            <div className="hero-right">
                <img className="hero-img" src={hero_img} alt="Hero left photo"/>
            </div>
        </div>
    )
}
export default Hero

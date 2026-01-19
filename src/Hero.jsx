import React from 'react';
import './Hero.css'; // Will Create this later

function Hero() {
    return (
        <div className="hero">
            <div className="hero__container">
                <img
                    className="hero__image"
                    src={`${import.meta.env.BASE_URL}banner.png`}
                    alt="Student Store Banner"
                />
            </div>
        </div>
    );
}

export default Hero;

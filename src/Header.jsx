import React, { useState, useEffect } from 'react';
import './Header.css';
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
    const [location, setLocation] = useState("Select your address");

    const handleAuthenticaton = () => {
        if (user) {
            // Simulate Sign Out
            dispatch({
                type: 'SET_USER',
                user: null
            })
        }
    }

    const getLocation = () => {
        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser");
            return;
        }

        setLocation("Locating...");

        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            try {
                // Using OpenStreetMap Nominatim API for reverse geocoding
                const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
                const data = await response.json();

                // Extract relevant address parts
                const city = data.address.city || data.address.town || data.address.village || data.address.county;
                const postcode = data.address.postcode;

                if (city) {
                    setLocation(`${city}${postcode ? `, ${postcode}` : ''}`);
                } else {
                    setLocation("Location found");
                }
            } catch (error) {
                console.error("Error fetching address:", error);
                setLocation("Address not found");
            }
        }, (error) => {
            console.error("Error getting location:", error);
            setLocation("Location access denied");
        });
    }

    return (
        <div className="header">
            <Link to="/">
                <div className="header__logoContainer">
                    <img
                        className="header__logo"
                        src="/logo.png"
                        alt="AK Logo"
                    />
                    <span className="header__domain">.in</span>
                </div>
            </Link>

            <div className="header__option header__locationOption" onClick={getLocation}>
                <span className="header__optionLineOne">Delivering to</span>
                <span className="header__optionLineTwo">
                    <GrLocation className="header__locationIcon" /> {location}
                </span>
            </div>

            <div className="header__search">
                <select className="header__searchSelect">
                    <option>All</option>
                </select>
                <input className="header__searchInput" type="text" placeholder="Search AK Store" />
                <div className="header__searchIconContainer">
                    <BsSearch className="header__searchIcon" />
                </div>
            </div>

            <div className="header__nav">

                <Link to={!user ? '/login' : '/'}>
                    <div onClick={handleAuthenticaton} className="header__option">
                        <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
                        <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>

                <Link to='/movies'>
                    <div className="header__option">
                        <span className="header__optionLineOne">Stream</span>
                        <span className="header__optionLineTwo">Movies</span>
                    </div>
                </Link>

                <Link to='/orders'>
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <BiCart className="header__basketIcon" />
                        <span className="header__optionLineTwo header__basketCount">
                            {basket?.length}
                        </span>
                        <span className="header__optionLineTwo header__basketText">Cart</span>
                    </div>
                </Link>

            </div>
        </div>
    );
}

export default Header;

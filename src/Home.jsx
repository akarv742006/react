import React from 'react';
import './Home.css';
import Hero from './Hero';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <Hero />

                <div className="home__row">
                    <Product
                        id="101"
                        title="Premium College Laptop - Slim, Powerful, All-Day Battery"
                        price={85000}
                        rating={5}
                        image="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    />
                    <Product
                        id="102"
                        title="Noise Cancelling Wireless Headphones for Study Focus"
                        price={12000}
                        rating={4}
                        image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="103"
                        title="Spicy Instant Noodles - Pack of 12 (Dorm Essential)"
                        price={450}
                        rating={5}
                        image="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    />
                    <Product
                        id="104"
                        title="Waterproof Anti-Theft Laptop Backpack with USB Charging Port"
                        price={2500}
                        rating={4}
                        image="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    />
                    <Product
                        id="105"
                        title="Advanced Engineering Mathematics Textbook"
                        price={850}
                        rating={3}
                        image="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="106"
                        title="RGB Mechanical Gaming Keyboard"
                        price={3500}
                        rating={4}
                        image="https://images.unsplash.com/photo-1587829741301-30c00609557f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="107"
                        title="LED Desk Lamp with Wireless Charger"
                        price={1800}
                        rating={5}
                        image="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    />
                    <Product
                        id="108"
                        title="Single Serve Smart Coffee Maker"
                        price={4500}
                        rating={4}
                        image="https://images.unsplash.com/photo-1520978349316-060c4a80b559?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    />
                    <Product
                        id="109"
                        title="Classic College Hoodie - Grey"
                        price={1200}
                        rating={4}
                        image="https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    />
                    <Product
                        id="110"
                        title="5-Subject Notebook Set (Pack of 3)"
                        price={600}
                        rating={5}
                        image="https://images.unsplash.com/photo-1531346878377-a513bc95ba0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;

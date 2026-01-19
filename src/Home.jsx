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
                        image="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    />
                    <Product
                        id="102"
                        title="Noise Cancelling Wireless Headphones for Study Focus"
                        price={12000}
                        rating={4}
                        image="https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="103"
                        title="Spicy Instant Noodles - Pack of 12 (Dorm Essential)"
                        price={450}
                        rating={5}
                        image="https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    />
                    <Product
                        id="104"
                        title="Waterproof Anti-Theft Laptop Backpack with USB Charging Port"
                        price={2500}
                        rating={4}
                        image="https://images.unsplash.com/photo-1581605405669-fcdf81165afa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    />
                    <Product
                        id="105"
                        title="Advanced Engineering Mathematics Textbook"
                        price={850}
                        rating={3}
                        image="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="106"
                        title="RGB Mechanical Gaming Keyboard"
                        price={3500}
                        rating={4}
                        image="https://images.unsplash.com/photo-1595225476474-87563907a212?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="107"
                        title="LED Desk Lamp with Wireless Charger"
                        price={1800}
                        rating={5}
                        image="https://images.unsplash.com/photo-1534073828943-f801091a7d58?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    />
                    <Product
                        id="108"
                        title="Single Serve Smart Coffee Maker"
                        price={4500}
                        rating={4}
                        image="https://images.unsplash.com/photo-1517036080480-2b3d358c19a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    />
                    <Product
                        id="109"
                        title="Classic College Hoodie - Grey"
                        price={1200}
                        rating={4}
                        image="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    />
                    <Product
                        id="110"
                        title="5-Subject Notebook Set (Pack of 3)"
                        price={600}
                        rating={5}
                        image="https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;

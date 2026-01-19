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
                        image="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
                    />
                    <Product
                        id="102"
                        title="Noise Cancelling Wireless Headphones for Study Focus"
                        price={12000}
                        rating={4}
                        image="https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="103"
                        title="Spicy Instant Noodles - Pack of 12 (Dorm Essential)"
                        price={450}
                        rating={5}
                        image="https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg?auto=compress&cs=tinysrgb&w=600"
                    />
                    <Product
                        id="104"
                        title="Waterproof Anti-Theft Laptop Backpack with USB Charging Port"
                        price={2500}
                        rating={4}
                        image="https://images.pexels.com/photos/3731256/pexels-photo-3731256.jpeg?auto=compress&cs=tinysrgb&w=600"
                    />
                    <Product
                        id="105"
                        title="Advanced Engineering Mathematics Textbook"
                        price={850}
                        rating={3}
                        image="https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&w=600"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="106"
                        title="RGB Mechanical Gaming Keyboard"
                        price={3500}
                        rating={4}
                        image="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="107"
                        title="LED Desk Lamp with Wireless Charger"
                        price={1800}
                        rating={5}
                        image="https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=600"
                    />
                    <Product
                        id="108"
                        title="Single Serve Smart Coffee Maker"
                        price={4500}
                        rating={4}
                        image="https://images.pexels.com/photos/2067628/pexels-photo-2067628.jpeg?auto=compress&cs=tinysrgb&w=600"
                    />
                    <Product
                        id="109"
                        title="Classic College Hoodie - Grey"
                        price={1200}
                        rating={4}
                        image="https://images.pexels.com/photos/6347888/pexels-photo-6347888.jpeg?auto=compress&cs=tinysrgb&w=600"
                    />
                    <Product
                        id="110"
                        title="5-Subject Notebook Set (Pack of 3)"
                        price={600}
                        rating={5}
                        image="https://images.pexels.com/photos/733852/pexels-photo-733852.jpeg?auto=compress&cs=tinysrgb&w=600"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;

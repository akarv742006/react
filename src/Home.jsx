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
                        image="https://upload.wikimedia.org/wikipedia/commons/e/e9/MacBook_Pro_16-inch_2019.jpg"
                    />
                    <Product
                        id="102"
                        title="Noise Cancelling Wireless Headphones for Study Focus"
                        price={12000}
                        rating={4}
                        image="https://upload.wikimedia.org/wikipedia/commons/4/41/Sony_WH-1000XM3.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="103"
                        title="Spicy Instant Noodles - Pack of 12 (Dorm Essential)"
                        price={450}
                        rating={5}
                        image="https://upload.wikimedia.org/wikipedia/commons/e/ed/Maggi_Noodles.jpg"
                    />
                    <Product
                        id="104"
                        title="Waterproof Anti-Theft Laptop Backpack with USB Charging Port"
                        price={2500}
                        rating={4}
                        image="https://upload.wikimedia.org/wikipedia/commons/d/d3/Backpack_2020.jpg"
                    />
                    <Product
                        id="105"
                        title="Advanced Engineering Mathematics Textbook"
                        price={850}
                        rating={3}
                        image="https://upload.wikimedia.org/wikipedia/commons/4/4b/Data_Structures_and_Algorithms_in_Java_6th_Edition.jpg"
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
                        image="https://upload.wikimedia.org/wikipedia/commons/1/14/Desk_lamp.jpg"
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
                        image="https://upload.wikimedia.org/wikipedia/commons/2/23/Grey_Hoodie.jpg"
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

import React from 'react';
import './Checkout.css'; // Reuse Checkout styles or create new
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from "./StateProvider";
import { Link, useNavigate } from "react-router-dom";
import { getBasketTotal } from "./reducer";

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const navigate = useNavigate();

    const formatCurrency = (value) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
        }).format(value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Simulate Processing...

        // 1. Save order to "DB" (localStorage)
        const newOrder = {
            id: 'ORD-' + Math.floor(Math.random() * 1000000),
            amount: getBasketTotal(basket),
            created: Date.now(), // timestamp
            items: basket
        }

        const currentOrders = JSON.parse(localStorage.getItem('orders') || "[]");
        currentOrders.unshift(newOrder); // Add to top
        localStorage.setItem('orders', JSON.stringify(currentOrders));

        // 2. Clear Basket
        dispatch({
            type: 'EMPTY_BASKET'
        })

        // 3. Redirect
        navigate('/orders', { replace: true });
    }

    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout (<Link to="/checkout">{basket?.length} items</Link>)
                </h1>

                {/* Delivery Address */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email || 'Guest User'}</p>
                        <p>123 React Lane</p>
                        <p>Tech City, CA</p>
                    </div>
                </div>

                {/* Review Items */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                {/* Payment Method */}
                <div className='payment__section'>
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* Card Element would go here */}
                        <div className='payment__priceContainer'>
                            <h3>Order Total: {formatCurrency(getBasketTotal(basket))}</h3>
                            <button onClick={handleSubmit} style={{
                                background: '#f0c14b',
                                border: '1px solid #a88734',
                                padding: '5px 10px',
                                cursor: 'pointer',
                                fontWeight: 'bold',
                                marginTop: '10px'
                            }}>
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment

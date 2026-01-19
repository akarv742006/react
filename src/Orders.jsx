import React, { useEffect, useState } from 'react';
import './Orders.css'; // Will create simple css
import CheckoutProduct from "./CheckoutProduct";
// import moment from "moment"; // Removed uninstalled dependency

function Orders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Fetch from "DB"
        const savedOrders = JSON.parse(localStorage.getItem('orders') || "[]");
        setOrders(savedOrders);
    }, []);

    return (
        <div className='orders'>
            <h1>Your Orders</h1>

            <div className='orders__order'>
                {orders.map(order => (
                    <div className="order_container" style={{ margin: '20px 0', padding: '20px', border: '1px solid lightgray', background: 'white' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h3>Order ID: {order.id}</h3>
                            <h3 style={{ color: 'green' }}>✅ Completed</h3>
                        </div>
                        <p>{new Date(order.created).toLocaleString()}</p>
                        <p className="order__total">Order Total: <strong>₹{order.amount}</strong></p>

                        {order.items.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Orders;

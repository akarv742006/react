import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
                    alt="Checkout Banner"
                />

                <div>
                    {/* <h3>Hello, {user?.email}</h3> */}
                    <h2 className="checkout__title">Your shopping Basket</h2>


                    {basket?.length === 0 ? (
                        <div style={{ padding: '20px' }}>
                            <p>Your basket is currently empty.</p>
                            <p>You have no items in your basket. To buy one or more items, click "Add to basket" next to the item.</p>
                        </div>
                    ) : (
                        <div>
                            {/* Items exist */}
                        </div>
                    )}

                    {basket?.map(item => (
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

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout;

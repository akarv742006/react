import React from 'react';
import './Subtotal.css';
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

import { useNavigate } from "react-router-dom";

function Subtotal() {
    const navigate = useNavigate();
    const [{ basket }, dispatch] = useStateValue();

    // Custom currency formatter since library failed to install
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
        }).format(value);
    };

    return (
        <div className="subtotal">
            <p>
                Subtotal ({basket?.length} items): <strong>{formatCurrency(getBasketTotal(basket))}</strong>
            </p>
            <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
            </small>

            <button onClick={e => navigate('/payment')}>Proceed to Checkout</button>
        </div>
    );
}

export default Subtotal;

import React, { useContext } from 'react';
import { cartContext } from '../context/Cart'; // Corrected import for cartContext

const Cart = () => {
    const cart = useContext(cartContext); // Access context using useContext

    const total = cart.Items.reduce((a, b) => a + b.price, 0); // Calculate total price

    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {
                    cart && cart.Items.map((item, index) => (
                        <li key={index}> {/* Added a key prop to the <li> element */}
                            {item.name} - {item.price} {/* Changed Items to item */}
                        </li>
                    ))
                }
            </ul>

            <h4>Total bill: {total} </h4>
        </div>
    );
}

export default Cart;

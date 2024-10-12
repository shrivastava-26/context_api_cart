import react, {useContext} from 'react';
import Cart from './Cart'
import {cartContext} from "../context/Cart"


const Item = (props) => {

    const cart = useContext(cartContext);
    console.log("cart", cart);

    return (
        <div>
            <h4>Item: {props.name}</h4>
            <p>Price: {props.price}</p>

            <button onClick={()=> cart.setItems([
                ...cart.Items, {names: props.name, price: props.price}
            ])
            }
            >Add to Cart</button>
            <Cart/>
        </div>
    )
}

export default Item;
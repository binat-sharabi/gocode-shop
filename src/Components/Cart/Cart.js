import { useContext } from "react";
import CartContext from "../../Contexts/CartContext";

import './Cart.css';

function Cart(props) {
    const { cart, setCart } = useContext(CartContext);
    return (
        <>
            <nav className="cart-nav">
                <h1>Cart</h1>

                <div>
                    <div className="cart-info">
                        <label>Num of Items: {cart.length}</label>
                        <label>Price: {cart.reduce((acc,curr)=>acc+curr.price,0)} </label>
                    </div>
                    <br></br>
                </div>
            </nav>
            <div>
                {
                    cart.length > 0 &&
                    <ul>
                        {
                            cart.map(item => <li className="item-in-cart"> <img src={item.image}/>  <h5>Title:</h5> {item.title} <h5>Price:</h5>{item.price} </li>)
                        }
                    </ul>
                }

            </div>
        </>
        // <>
                //     <div>num of items:{cart.length}</div>
        //     <br />
        //     <div>price: 0</div>

        // </>
    );
}
export default Cart;
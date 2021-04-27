import { useContext } from 'react';
import CartContext from '../../Contexts/CartContext';
import './Product.css'


function Product(props) { 
const {cart,setCart}=useContext(CartContext);

function AddToCart(){
    debugger
   setCart(item=>[...item,props]);
}
    return (
            <div className="product-card">
                <div className="product-image">
                    <img
                        src={props.image}
                    />
                </div>
                <div className="product-info">
                    <h5>{props.title}</h5>
                    <h6>{props.price}</h6>
                </div>
                <button onClick={()=>AddToCart()}>Add to Cart</button>
            </div>
    );
}

export default Product;


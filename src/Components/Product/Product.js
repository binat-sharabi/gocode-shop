import { useContext } from "react";
import CartContext from "../../Contexts/CartContext";
import "./Product.css";

function Product({ id, image, title, price, quantity }) {
  const { cart, setCart } = useContext(CartContext);

  function AddToCart() {
    debugger;
    let product = { id, image, title, price, quantity };
    const indexOfProduct = cart.map((item) => item.id).indexOf(id);
    if (indexOfProduct > -1) {
      product = cart.find((item) => item.id === id);
      cart.splice(indexOfProduct, 1);
    }

    product.quantity++;
    setCart((item) => [...item, product]);
  }

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} />
      </div>
      <div className="product-info">
        <h5>{title}</h5>
        <h6>{price}</h6>
      </div>
      <button onClick={() => AddToCart()}>Add to Cart</button>
    </div>
  );
}

export default Product;

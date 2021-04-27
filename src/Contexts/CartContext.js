import React, { useContext, useState } from "react";

export const CartContext = React.createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCarts() {
    return useContext(CartContext);
}

export default CartContext;
        



import React, { createContext, useEffect, useState } from 'react';

const CartContext = createContext();

const initialState = {
    cart: [],
    loading: false,
    error: null
}

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(initialState);


    function addProduct(product) {
        setCart([...initialState.cart, product])
    }


    function getTotalPrice() {
        return cart.reduce((acc, curr) => acc + curr.price, 0);
    }

    function getTotalLength() {
        return cart.length;
    }

    return (
        <CartContext.Provider value={{ cart }}>
            {children}
        </CartContext.Provider >
    )

}

export {
    CartContext,
    CartProvider
}
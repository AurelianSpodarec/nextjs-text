import React, { useContext } from 'react';

import { CartContext, CartProvider } from './../context/ContextCart';

function Cart() {

    const cartContext = useContext(CartContext)

    { console.log("cart", cartContext.cart.cart) }
    return (
        <div>
            <div>Total Items: </div>
            <div>Total Price: {}</div>

            <div>
                <div>Cart Items</div>

                <div>

                    {
                        cartContext.cart.cart.length === 0 ? "Nothing in the cart ;-(" :
                            cartContext.cart.cart.map((product, index) => {
                                return (
                                    <div style={{ border: "2px solid green", padding: "15px", margin: "8px 0" }}>
                                        <div>
                                            {/* img */}
                                        </div>
                                        <div>
                                            <div>Name: {product.name}</div>
                                            <div>Price: </div>
                                            <div>Size: </div>
                                            <div>Color: </div>
                                        </div>
                                    </div>
                                )
                            })
                    }

                </div>
            </div>
        </div>
    )
}

export default Cart;
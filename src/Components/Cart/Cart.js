import React, { useContext, useState } from "react";
import CartModal from "../Modal/CartModal";
import { CartContext } from "../Context/Cart-context";
  
const Cart = (props) => {
    const {cartItems} = useContext(CartContext)
    return(
        <>
            
            {props.showModal && (
                <CartModal 
                    cartItems={cartItems} 
                    onClose={props.closeModal} 
                />
            )}
        </>
    );
}

export default Cart;
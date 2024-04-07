import React, { useContext } from "react";
import CartModal from "../Modal/CartModal";
import { CartContext } from "../Context/Cart-context";
  
const Cart = (props) => {
    const {cartItems, showModal} = useContext(CartContext);
    return(
        <>
            {showModal && (
                <CartModal 
                    cartItems={cartItems} 
                    onClose={props.closeModal} 
                />
            )}
        </>
    );
}

export default Cart;
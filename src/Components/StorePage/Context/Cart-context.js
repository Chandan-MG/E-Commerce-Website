import React, { createContext, useState } from "react";

export const CartContext = createContext();

const cartElements = [];
  

const CartContextProvider = ({children}) => {
    const [cartItems, setCartItems] = useState(cartElements);
   
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const addToCart = (item) => {
        const existingItemIndex = cartItems.findIndex((cartItem) => {
            return cartItem.title === item.title;
        });
    
        if (existingItemIndex !== -1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingItemIndex].quantity++;
            setCartItems(updatedCartItems);
        } else {
            const newItem = { ...item, quantity: 1 };
            const updatedCartItems = [...cartItems, newItem];
            setCartItems(updatedCartItems);
            // console.log('New item added to cart:', cartItems);
        }
    };
    

    return(
        <CartContext.Provider value={{cartItems, addToCart, handleShowModal, handleCloseModal, showModal}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
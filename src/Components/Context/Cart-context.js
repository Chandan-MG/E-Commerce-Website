import React, { createContext, useState } from "react";

export const CartContext = createContext();

const cartElements = [
    // {
    //     title: 'Colors',
    //     price: 100,
    //     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    //     quantity: 2,
    // },
    
    // {
    //     title: 'Black and white Colors',
    //     price: 50,
    //     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    //     quantity: 3,
    // },
    
    // {
    //     title: 'Yellow and Black Colors',
    //     price: 70,
    //     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    //     quantity: 1,
    // } 
]
  

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
            console.log('New item added to cart:', cartItems);
        }
    };
    

    return(
        <CartContext.Provider value={{cartItems, addToCart, handleShowModal, handleCloseModal, showModal}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
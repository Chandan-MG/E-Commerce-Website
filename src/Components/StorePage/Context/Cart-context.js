import React, { createContext, useContext, useEffect, useState } from "react";
import AuthContext from "../../AuthPage/Auth-Context";

export const CartContext = createContext();

const cartElements = [];
  

const CartContextProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    const ctx = useContext(AuthContext);
   
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const useremail = ctx.userEmail
                .split("")
                .filter((x) => x.charCodeAt(0) >= 97 && x.charCodeAt(0) <= 122)
                .join("");
                const response = await fetch(`https://crudcrud.com/api/eb09af7a554f437ba458dfc6d04d7281/${useremail}`);
                if (response.ok) {
                    const cartItems = await response.json();
                    // Update cart context with fetched cart items
                    setCartItems(cartItems);
                }
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        };

        fetchCartItems();
    }, [ctx.userEmail]);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const addToCart = (item) => {
        // console.log(item);
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
        }
    };
    

    return(
        <CartContext.Provider value={{cartItems, addToCart, handleShowModal, handleCloseModal, showModal}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
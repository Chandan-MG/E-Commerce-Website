import React, { useContext } from "react";
import { CartContext } from "../Context/Cart-context";
import Cart from "../Cart/Cart";

const Footer =()=>{
    const {handleCloseModal, showModal} = useContext(CartContext)
    return(
        <Cart closeModal={handleCloseModal} showModal={showModal} />
    )
}
export default Footer;
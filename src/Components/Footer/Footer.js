import React, { useContext } from "react";
import { CartContext } from "../Context/Cart-context";

const Footer =()=>{
    const {handleCloseModal, showModal} = useContext(CartContext)
    return(
        <Cart closeModal={handleCloseModal} showModal={showModal} />
    )
}
export default Footer;
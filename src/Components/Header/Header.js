import React, { useContext } from "react";
import { Button, Col } from "react-bootstrap";
import { CartContext } from "../Context/Cart-context";

const Header =()=>{
    const {handleShowModal, cartItems} = useContext(CartContext);
    return(
        <Col className="d-flex justify-content-end">
            <Button variant="dark" onClick={handleShowModal}>Cart ({cartItems.length})</Button>
        </Col>
    )
}
export default Header;
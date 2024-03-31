import React, { useContext } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { CartContext } from "../Context/Cart-context";

const CartModal = () => {
    const {cartItems, handleCloseModal} = useContext(CartContext); 
    return (
        <Modal show={true} onHide={handleCloseModal} size="lg">
            <Modal.Header closeButton className="border-0">
                {/* <Modal.Title>Cart</Modal.Title> */}
            </Modal.Header>
            <Modal.Body style={{ paddingTop: '0.5px' }}>
                <Row className="text-center"><h2>Cart</h2></Row>
                {cartItems.map((item, index) => (
                    <Row key={index} className="mb-3">
                        <Col className="text-center" >
                            <Row>
                                <Col>
                                    <img src={item.imageUrl} alt={item.title} style={{ height: '10vh' }} />
                                </Col>
                                <Col>
                                    <div>{item.title}</div>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="text-center">
                            <div>{item.price}</div>
                        </Col>
                        <Col className="text-center">
                            <Row>
                                <Col>
                                    <div style={{ border: '2px solid skyblue', padding: '4px', width: '30px', textAlign: 'center' }}>{item.quantity}</div>
                                </Col>
                                <Col>
                                    <Button variant="danger">Remove</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                ))}
                <Row className="text-end" style={{paddingRight: '1vw'}}>
                    <Col xs={11}><h2>Total : </h2></Col>
                    <Col xs={1} style={{marginTop: '0.8vh'}}><h4>3456</h4></Col>
                </Row>
                <Row className="text-center">
                    <Col>
                        <Button variant="primary" style={{width: '6vw'}} onClick={handleCloseModal}>
                            Buy
                        </Button>
                    </Col>
                </Row>
            </Modal.Body>
            {/* <Modal.Footer className="border-0 text-center">
                <Button variant="primary" style={{width: '6vw'}} onClick={props.onClose}>
                    Buy
                </Button>
            </Modal.Footer> */}
        </Modal>
    );
}

export default CartModal;

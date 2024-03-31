import React from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";

const CartModal = (props) => {
    return (
        <Modal show={true} onHide={props.onClose} size="lg">
            <Modal.Header closeButton  className="border-0">
                {/* <Modal.Title>Cart</Modal.Title> */}
            </Modal.Header>
            <Modal.Body style={{ paddingTop: '0.5px' }}>
                <Row className="text-center"><h2>Cart</h2></Row>
                {props.cartItems.map((item, index) => (
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
                                    <div style={{ border: '2px solid skyblue', padding: '4px', width: '30px', textAlign: 'center' }}>1</div>
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
                        <Button variant="primary" style={{width: '6vw'}} onClick={props.onClose}>
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

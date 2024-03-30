import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";

const cartElements = [
    {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        quantity: 2,
    },
    
    {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        quantity: 3,
    },
    
    {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        quantity: 1,
    } 
]
    
const Cart = (props) => {
    const [cartItems, setCartItems] = useState(cartElements)
    return(
        <Container>
            <Row className="text-center">
                <Col><h1>Cart</h1></Col>
            </Row>
            <Row>
                <Row className="text-center">
                    <Col><h3>Item</h3></Col>
                    <Col><h3>Price</h3></Col>
                    <Col><h3>quantity</h3></Col>
                </Row>
                {
                    cartItems.map((item, index) =>(
                        <Row key={index} className="mb-3" style={{height: '10vh'}}>
                            <Col className="text-center">
                                <Row>
                                    <Col>
                                        <img src={item.imageUrl} alt={item.title} style={{height: '10vh'}} />
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
                    ))
                }
                <Row className="text-end">
                    <Col>Total: 1244</Col>
                </Row>
            </Row>
            <Row className="text-center">
                <Col><Button variant="success" style={{width: '8vw'}}>Buy</Button></Col>
            </Row>
        </Container>
    )
}

export default Cart;
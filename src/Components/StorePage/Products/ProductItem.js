import React, { useContext } from "react";
import './ProductItem.css';
import Card from 'react-bootstrap/Card';
import { Button, Col, Container, Row } from "react-bootstrap";
// import {CartContext} from '../Context/Cart-context.js';
// import { Link } from "react-router-dom";
import AuthContext from "../../AuthPage/Auth-Context.js";

const ProductItem = (props) => {
    const ctx = useContext(AuthContext);
    // const cartCtx = useContext(CartContext);

    const handleCrudStore = async() =>{
        const useremail = ctx.userEmail
        .split("")
        .filter((x) => x.charCodeAt(0) >= 97 && x.charCodeAt(0) <= 122)
        .join("");
        // console.log(useremail);
        const response = await fetch(
            `https://crudcrud.com/api/eb09af7a554f437ba458dfc6d04d7281/${useremail}`,
            {
              method: "POST",
              body: JSON.stringify(props),
              headers: {
                "Content-Type": "application/json",
              },
            }
        );
    }

    const handleAddToCart =()=>{
        // addToCart(props)
        handleCrudStore()
    }

    
    return(
        <Container>
            <Row  style={{padding:"20px"}}>
                <Col>
                    <Card style={{ width: '20rem', height: '26rem' }} className="border-0">
                        
                        <Card.Body>
                            <Row className="text-center" style={{paddingBottom: '10px', height: '3rem'}}>
                                <Col><h4>{props.title}</h4></Col>
                            </Row>
                            <Card.Img style={{ width: '18rem', height: '17rem' }} variant="top" src={props.imageUrl} className="product-image" />
                            <Row style={{paddingTop: "20px"}}>
                                <Col className="text-start">${props.price}</Col>
                                <Col className="d-flex justify-content-end">
                                    {/* <Link to={`/productdetail/${props.title}`}> */}
                                        <Button variant="primary" onClick={handleAddToCart}>Buy</Button>
                                    {/* </Link> */}
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductItem;
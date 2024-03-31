import React from "react";
import ProductItem from "./ProductItem";
import { Col, Container, Row } from "react-bootstrap";

const ProductList = (props) => {
    return(
        <Container>
            <Row>
                {props.products.map((product) => (
                    <Col key={product.title} xs={12} sm={6} md={4} lg={3}>
                        <ProductItem 
                            title={product.title}
                            price={product.price}
                            imageUrl={product.imageUrl}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default ProductList;
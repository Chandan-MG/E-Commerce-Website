import React from "react";
import './ProductItem.css';
import Card from 'react-bootstrap/Card';

const ProductItem = (props) => {
    return(
        <div className="container" style={{padding: '20px'}}>
            <Card style={{ width: '18rem' }}>
                <Card.Header>
                <Card.Title><h2>{props.title}</h2></Card.Title>
                </Card.Header>
                
                <Card.Body>
                    <Card.Img variant="top" src={props.imageUrl} />
                </Card.Body>
                <Card.Footer>
                    <Card.Text>
                        {props.price}
                    </Card.Text>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default ProductItem;
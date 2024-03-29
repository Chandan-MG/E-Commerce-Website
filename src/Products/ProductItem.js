import React from "react";
import './ProductItem.css';

const ProductItem = (props) => {
    return(
        <div className="product-item">
            <span>{props.title}</span>
            <span>{props.price}</span>
            <span><img src={props.imageUrl} alt="product images" /></span>
        </div>
    )
}

export default ProductItem;
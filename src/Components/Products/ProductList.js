import React from "react";
import ProductItem from "./ProductItem";

const ProductList = (props) => {
    return(
        <ul>
            {props.products.map((product) => (
                <ProductItem 
                    key={product.title}
                    title={product.title}
                    price={product.price}
                    imageUrl={product.imageUrl}
                />
            ))}
        </ul>
    )
}

export default ProductList;
import Product from '../Product/Product'
import React from 'react'

function Products(){
    const list= React.createElement(
        "div",
        {class:"products"},
        <Product></Product>,
        <Product></Product>,
        <Product></Product>,
        <Product></Product>,
        <Product></Product>,
        <Product></Product>,
        <Product></Product>,
        <Product></Product>,
        <Product></Product>,
        <Product></Product>,
        <Product></Product>,
        <Product></Product>,
        <Product></Product>,
        <Product></Product>,
        <Product></Product>
    );
   
    return list;
}

export default ProductList;
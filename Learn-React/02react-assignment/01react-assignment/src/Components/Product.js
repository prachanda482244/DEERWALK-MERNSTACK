import React from 'react'

const Product = ({ productName, productPrice, productQuantity }) => {
    return (
        <div className='box'>
            <h1>Products</h1>
            <h2>Product Name : {productName}</h2>
            <h2>Product Price : {productPrice}</h2>
            <h2>Product Quantity : {productQuantity}</h2>
        </div>
    )
}

export default Product

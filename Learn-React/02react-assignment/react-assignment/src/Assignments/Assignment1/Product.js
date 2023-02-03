import React from 'react'

const Product = ({ productName, productPrice, productQuantity }) => {
    return (
        <div>

            <p style={{ textAlign: 'center', fontSize: '1.5rem' }}>Q34 make a component that takes props as  productName, productPrice, prodictQuantity
                <br />
                Q36 make a class .box and give some properdy as color, background-color, height, width, and use that class</p>
            <div className='box'>
                <h1>Products</h1>
                <h2>Product Name : {productName}</h2>
                <h2>Product Price : {productPrice}</h2>
                <h2>Product Quantity : {productQuantity}</h2>
            </div>
        </div>
    )
}

export default Product

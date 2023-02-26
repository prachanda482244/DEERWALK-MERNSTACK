import React, { useState } from 'react'

const ProductChange = ({ productName, productPrice, productQuantity }) => {
    let [products, setProducts] = useState({
        productName: productName,
        productPrice: productPrice,
        productQuantity: productQuantity

    })
    let HandlechangeProductName = () => {
        setProducts({
            ...products,
            productName: 'New product'
        })
    }


    let HandlechangeProductPrice = () => {
        setProducts({
            ...products,
            productPrice: 20000
        })
    }


    let HandlechangeProductQuantity = () => {
        setProducts({
            ...products,
            productQuantity: 10
        })
    }
    return (
        <div >
            <h2>@41 make a component that is responsible for
                create a state varible  that takes input as object which hold information of productName, productPrice, productQuanty ie productName:"", productPrice:"", productQuantity:""  and make 3 button to change productName, productPrice and productQuantity</h2>

            <div className='card' >

                Product name: {products.productName} <br />
                Product Price: {products.productPrice} <br />
                Product Quantity: {products.productQuantity} <br />
                <div className="btnContainer">

                    <button onClick={HandlechangeProductName}>Change Name</button>
                    <button onClick={HandlechangeProductPrice}>Change Price</button>
                    <button onClick={HandlechangeProductQuantity}>Change Quantity</button>
                </div>
            </div>
        </div>
    )
}

export default ProductChange

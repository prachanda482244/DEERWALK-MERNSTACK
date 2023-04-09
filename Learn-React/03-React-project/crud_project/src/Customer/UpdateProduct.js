import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CustomerForm from '../Formik/CustomerForm'

const UpdateProduct = () => {
    let [product, setProduct] = useState([])
    let { id } = useParams()

    let getProduct = async () => {
        let results = await axios({
            method: 'get',
            url: `https://project-dw.onrender.com/api/v1/products/${id}`
        })
        let singleProduct = results.data.data
        console.log(singleProduct)
        setProduct(singleProduct)
    }

    useEffect(() => {
        getProduct()
    }, [])
    return (
        <div>
            <h2 className='text-center text-3xl text-emerald-300 uppercase my-2'>Update Product</h2>
            <CustomerForm btnName="Edit" apiMethod="patch" product={product} />
        </div>
    )
}

export default UpdateProduct

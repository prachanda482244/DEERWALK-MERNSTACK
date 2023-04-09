import React, { useEffect, useState } from 'react'
import { Form, Formik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import FormikInput from './FormikInput'
import FormikSelect from './FormikSelect'
import AlertMessage from '../Components/AlertMessage'
import { useNavigate, useParams } from 'react-router-dom'
import { companyNames } from '../config/config'
const CustomerForm = ({ btnName, apiMethod, product = {} }) => {
    // let [product, setProduct] = useState([])
    let { id } = useParams()
    let navigate = useNavigate()
    // let getProduct = async () => {
    //     let results = await axios({
    //         method: 'get',
    //         url: `https://project-dw.onrender.com/api/v1/products/${id}`
    //     })
    //     let singleProduct = results.data.data
    //     console.log(singleProduct)
    //     setProduct(singleProduct)
    // }

    // useEffect(() => {
    //     getProduct()
    // }, [])

    let [msg, setMessage] = useState({
        message: '',
        className: ''
    })

    let initialValues = {
        name: product.name || '',
        quantity: product.quantity || '',
        price: product.price || '',
        featured: product.featured || '',
        productImage: product.productImage || '',
        manufactureDate: product.manufactureDate || '',
        company: product.company || 'apple',
    }

    let validationSchema = yup.object({

        name: yup.string().required("Name is required"),
        quantity: yup.number().required("Quantity is required"),
        price: yup.number().required("Price is required"),
        featured: yup.boolean(),
        productImage: yup.string().required("Product image is required"),
        manufactureDate: yup.string().required("Manufacture date is required"),
        company: yup.string().required("Company is required")
    })
    let FormSubmit = async (values, other) => {
        console.log(values)
        try {
            let output = await axios({
                method: apiMethod,
                url: apiMethod === 'patch' ? `https://project-dw.onrender.com/api/v1/products/${id}` : 'https://project-dw.onrender.com/api/v1/products',
                data: values
            })
            console.log(output)
            other.resetForm()
            setMessage({
                message: `Product ${btnName}ed Successfully`,
                className: 'green-900'
            })
            navigate('/customer/products/view')
        }
        catch (error) {
            console.log(error.message)
            setMessage({
                message: `Product cannot be added because of ${error.message}`,
                className: 'red-800'

            })
        }
        setTimeout(() => {
            setMessage({
                message: '',
                className: ''
            })
        }, 2500)
        // hit the api
    }

    return (
        <div>
            <AlertMessage message={msg.message} className={msg.className} />

            <Formik
                initialValues={initialValues} onSubmit={FormSubmit} validationSchema={validationSchema}
                enableReinitialize={true}
            >

                {
                    (formik) => {
                        return (
                            <Form autoComplete="nope" className='flex items-center flex-col border-2 border-emerald-600 p-8 md:w-[60vw] sm:w-auto m-auto mt-4 rounded-lg'
                            >
                                <div className='flex space-x-5 '>
                                    <FormikInput name="name" label="Name" type='text' required={true} />
                                    <FormikInput name="quantity" label="Quantity" type='number' required={true} />
                                    <FormikInput name="price" label="Price" type='number' required={true} />
                                </div>
                                <div className='flex space-x-5'>
                                    <FormikInput name="Featured" label="Featured" type='checkbox' required={true} />
                                    <FormikInput name="productImage" label="Product Image" type='text' required={true} />
                                    <FormikInput name="manufactureDate" label="Manufacture Date " type='date' required={true} />
                                </div>
                                <FormikSelect name='company' label='Company name' required={true} options={companyNames} />
                                <button type='submit' className=' bg-cyan-400 hover:bg-cyan-500 w-full py-3 px-2 rounded-lg m-2 text-white uppercase shadow-md'>{btnName} Product</button>

                            </Form>
                        )
                    }
                }
            </Formik>


        </div >
    )
}

export default CustomerForm
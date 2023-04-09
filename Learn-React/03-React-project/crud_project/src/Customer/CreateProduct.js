import React from 'react'
import CustomerForm from '../Formik/CustomerForm'


// Create product form
// hit api on submit
const CreateProduct = () => {

    return (
        <div>
            <h2 className='text-center text-3xl text-emerald-300 uppercase my-2'>Create Product</h2>
            <CustomerForm btnName="Add" apiMethod="post" />
        </div>
    )
}

export default CreateProduct

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AlertMessage from '../Components/AlertMessage'

const ShowAllProducts = () => {
    let [product, setProduct] = useState([])
    let [msg, setMessage] = useState({
        type: '',
        message: '',
        className: ''
    })
    let getProducts = async () => {
        try {

            let productsResult = await axios({
                method: 'get',
                url: "https://project-dw.onrender.com/api/v1/products"
            })
            let displayProduct = productsResult.data.data.results
            setProduct(displayProduct)

            setTimeout(() => {
                setMessage({
                    message: '',
                    className: ''
                })
            }, 2000);

        } catch (err) {
            setMessage({
                message: "Sorry some error occured",
                className: 'red-900'
            })
        }
    }
    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div className=' bg-gray-100'>
            <h2 className='text-4xl text-center font-light py-5 uppercase '>Our products</h2>
            <AlertMessage message={msg.message} className={msg.className} />
            <div className='flex items-center flex-wrap  p-5 gap-4' >
                {
                    product.map((item, i) => {
                        return (
                            <div key={i} className='border border-white bg-white rounded-lg p-5 hover:border-cyan-600 transition ease-in delay-75 hover:shadow-2xl space-y-3 relative'>
                                <div className="imgBox">
                                    <img className='h-[300px] w-[300px] rounded-2xl ' src={item.productImage} alt="Products" />
                                </div>
                                <div className="flex flex-col justify-center gap-2">
                                    <h1 className='text-center capitalize text-2xl font-normal '> {item.name}</h1>
                                    <h1 className='text-center font-semibold text-orange-600'>Rs: {item.price}</h1>
                                    <h1 className='text-center font-normal'>Available item : {item.quantity}</h1>
                                    <h1 className='text-right font-semibold text-red-700 text-sm'>Powered by: {item.company}</h1>
                                    <button className='py-4 px-3  text-white bg-cyan-500 hover:underline hover:text-black rounded-md transition ease-in delay-75'>View details</button>

                                    <button className='py-2 px-2 animate-pulse text-red-900 text-2xl  absolute -top-2 -right-1 hover:animate-none' onClick={async () => {
                                        try {

                                            await axios({
                                                method: 'delete',
                                                url: `https://project-dw.onrender.com/api/v1/products/${item._id}`
                                            })
                                            getProducts()

                                            setMessage({
                                                message: `Product ${item.name} deleted successfully`,
                                                className: 'green-900'
                                            })


                                        } catch (err) {
                                            setMessage({
                                                message: `Cannot delete  ${item.name}`,
                                                className: 'red-900'
                                            })

                                            setTimeout(() => {
                                                setMessage({
                                                    message: '',
                                                    className: ''
                                                })
                                            }, 2000);
                                        }

                                    }}>x</button>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}

export default ShowAllProducts

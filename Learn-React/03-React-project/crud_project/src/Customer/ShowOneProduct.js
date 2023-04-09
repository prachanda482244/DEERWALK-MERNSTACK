import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ShowOneProduct = () => {
    let [product, setProduct] = useState([])

    let [increment, setIncrement] = useState(product.quantity)
    let IncrementQuantity = () => {
        setIncrement(increment + 1)
    }

    let params = useParams()
    let id = params.id
    let navigate = useNavigate()

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
    let Navigate = () => {
        navigate(`/customer/products/update/${id}`)
    }
    return (
        <div className='flex  justify-center  gap-5 mt-4 border border-black p-6 w-[60vw] mx-auto rounded-2xl'>
            <div className="imgBox flex items-center justify-center">
                <img className='h-[500px] w-[500px] rounded-2xl ' src={product.productImage} alt="Products" />
            </div>
            <div className=' flex-col w-[50vw] space-y-3 relative mt-16'>
                <span className='absolute right-3 top-3 text-2xl bg-orange-800 text-white p-4 rounded-full'>sale</span>
                <p className="text-3xl text-gray-700">{product.name} on sale</p>
                <p className="text-gray-600 text-md ">Rs:{product.price}</p>
                <p className=" ">Is in featured: {product.featured ? 'yes' : 'no'}</p>
                <div className="border border-slate-300 flex items-center  justify-between space-x-2 p-1 w-[200px] ">
                    <span className='text-2xl text-orange-600'>{product.quantity}</span>
                    <p className='flex flex-col space-y-2'>
                        <button className='border border-black px-1 text-sm rounded-full hover:bg-black hover:text-white transition ease-in delay-75' onClick={IncrementQuantity}>+</button>
                        <button className='border border-black px-1 text-sm rounded-full hover:bg-black hover:text-white transition ease-in delay-75'>-</button>
                    </p>
                    <button className='p-2 bg-gray-500 text-white rounded-lg hover:bg-black hover:text-white transition ease-in delay-100'>Add to cart</button>
                </div>
                <p className="italic">Maufacture at: {new Date(product.manufactureDate).toLocaleDateString()}</p>
                <p className="border border-slate-300 w-1/2 text-center uppercase">{product.company}</p>
                <button className='w-full bg-cyan-900 text-white uppercase py-2 rounded-xl' onClick={Navigate}>Edit</button>
            </div>
        </div >
    )
}

export default ShowOneProduct

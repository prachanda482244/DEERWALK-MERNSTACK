import React from 'react'
import { useNavigate } from 'react-router-dom'
import product2 from '../Images/product2.jpg'
const Home = () => {

    let Navigate = useNavigate()
    let Register = () => {
        Navigate('/register')
    }

    return (
        <div className='bg-[#e9f8dc] h-screen'>
            <h2 className='text-center text-md italic py-7 font-mono font-bold'>Shop from here</h2>
            <h1 className='text-center text-5xl font-semibold'>Create your own merchandise</h1>
            <h1 className='text-center text-3xl font-thin my-2 w-2/3 mx-auto'>Friendly shop is the all-in-one commerce platform to find, design, print and sell your merch</h1>
            <div className='flex justify-center items-center space-y-5 my-3 flex-col'>
                <div className='w-screen flex items-center justify-center space-x-4'>
                    <input type="search" placeholder='Enter your email address' className='border-2 border-gray-500 w-1/4 py-3 px-2 rounded-lg ' />
                    <button className='bg-black text-white py-3 px-5 rounded-xl' onClick={Register}>Start free trial</button>
                </div>
                <div className='text-sm flex flex-col justify-center items-center '>
                    <p className='w-2/3'>
                        Try Friendly shop free for 3 days, no credit card required. By entering your email, you agree to receive marketing emails from Shopify.
                    </p>
                    <div className='flex justify-center flex-col space-y-2 items-center p-5'>
                        <img className=' object-fill h-80 rounded-full' src={product2} alt="product1" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home

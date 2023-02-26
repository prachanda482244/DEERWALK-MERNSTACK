import React from 'react'
import { NavLink } from 'react-router-dom'

const Customer = () => {
    return (
        <div >
            <ul className='flex space-x-11 p-5 items-center justify-center'>

                <li className='border-2 border-gray-600 py-3 px-5 rounded-lg bg-cyan-500 text-white shadow-xl'>
                    <NavLink to='/customer/products/create'>Add your products</NavLink>
                </li>

                {/* <li className='border-2 border-gray-600 py-3 px-5 rounded-lg bg-cyan-500 text-white shadow-xl'>
                    <NavLink to='/customer/products/update'>Update</NavLink>
                </li> */}

                <li className='border-2 border-gray-600 py-3 px-5 rounded-lg bg-cyan-500 text-white shadow-xl'>
                    <NavLink to='/customer/products/show'>View products</NavLink>
                </li>
            </ul>
            <div >
                <p className='text-center text-4xl'>Use the button above to add the product or view the products</p>
            </div>
        </div>
    )
}

export default Customer

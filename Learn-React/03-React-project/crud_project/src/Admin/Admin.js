import React from 'react'
import { NavLink } from 'react-router-dom'

const Admin = () => {
    return (
        <div>
            <ul className='flex space-x-11 p-5 items-center justify-center'>
                <li className='border-2 border-gray-600 py-3 px-5 rounded-lg bg-cyan-500 text-white shadow-xl'>

                    <NavLink to='/admin/products'>Products</NavLink>
                </li>
                <li className='border-2 border-gray-600 py-3 px-5 rounded-lg bg-cyan-500 text-white shadow-xl'>

                    <NavLink to='/admin/products/create'>Create</NavLink>
                </li>
                <li className='border-2 border-gray-600 py-3 px-5 rounded-lg bg-cyan-500 text-white shadow-xl'>

                    <NavLink to='/admin/products/update'>Update</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Admin

import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <header className=' pt-6 '>

            <nav className='flex justify-between items-center w-[90%] m-auto' >
                <div className="text-3xl text-cyan-500 hover:text-cyan-600">
                    <NavLink to='/'>
                        Friendly Shop
                    </NavLink>

                </div>
                <div className="links">

                    <ul className='flex justify-center gap-[4vw]'>
                        <li style={{ listStyle: 'none' }}>
                            <NavLink className='text-xl uppercase text-gray-600 hover:text-gray-900' to='/'>Home</NavLink>
                        </li>
                        <li style={{ listStyle: 'none' }}>
                            <NavLink className=' text-xl uppercase text-gray-600 hover:text-gray-900' to='/admin'>Admin</NavLink>
                        </li>
                        <li style={{ listStyle: 'none' }}>
                            <NavLink className='text-xl uppercase text-gray-500 hover:text-gray-900' to='/customer'>Customer</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="btns">
                    <NavLink className='bg-cyan-400 text-white px-5 py-3 mx-2 rounded-lg active:bg-cyan-900 hover:bg-cyan-600' to='/login'>Login</NavLink>
                    <NavLink className='bg-cyan-400 text-white px-5 py-3 mx-2 rounded-lg active:bg-cyan-900  hover:bg-cyan-600 ' to='/register'>Register</NavLink>
                </div>
            </nav>
            <div className='w-full border-[#e5e7eb]-200 border-2 mt-4'></div>
        </header>
    )
}

export default NavBar

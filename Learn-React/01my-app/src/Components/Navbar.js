import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <div className="logo">
                    React
                </div>
                <div className="list">

                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">
                                about
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/service">
                                service
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">
                                contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="searchBar">
                    <input type="text" name="" id="" placeholder='Search here' />
                    <button className='btn'>Search</button>
                </div>
            </div>
            <Routes>
                <Route path='/' element={"home page"} />
                <Route path='/about' element={"about page"} />
                <Route path='/service' element={"service page"} />
                <Route path='/contact' element={"contact page"} />
                <Route path='/:any' element={"any page"} /> {/* dynamic parameter*/}
                <Route path='*' element={"404 page"} />
            </Routes>
        </div>
    )
}

export default Navbar

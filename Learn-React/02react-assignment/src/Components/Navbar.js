import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <div className="logo">
                    React Assignment
                </div>
                <div className="list">

                    <ul>
                        <li>
                            <NavLink to="/" style={{ color: 'white', textDecoration: 'none' }}>
                                Home
                            </NavLink>

                        </li>
                        <li>
                            <NavLink to="/about" style={{ color: 'white', textDecoration: 'none' }}>
                                about
                            </NavLink>
                        </li>
                        <li>Assignments
                            <div className="dropdown-menu">
                                <ul>
                                    <li> <NavLink to="/assignment1" style={{ color: 'white', textDecoration: 'none' }}>
                                        Assignment1
                                    </NavLink></li>
                                    <li>
                                        <NavLink to="/assignment2" style={{ color: 'white', textDecoration: 'none' }}>
                                            Assignment2
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/assignment3" style={{ color: 'white', textDecoration: 'none' }}>
                                            Assignment3
                                        </NavLink>
                                    </li>         <li>
                                        <NavLink to="/assignment4" style={{ color: 'white', textDecoration: 'none' }}>
                                            Assignment4
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/assignment5" style={{ color: 'white', textDecoration: 'none' }}>
                                            Assignment5
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/routing-assignment" style={{ color: 'white', textDecoration: 'none' }}>
                                            Routing Assignment
                                        </NavLink>
                                    </li>

                                </ul>
                            </div>

                            {/*
                        </li>
                        <li>
                            <NavLink to="/assignment2">
                                Assignment2
                            </NavLink>
                        </li>    <li>
                            <NavLink to="/assignment3">
                                Assignment3
                            </NavLink> */}

                        </li>
                        <li>
                            <NavLink to='/service' style={{ color: 'white', textDecoration: 'none' }}>Service</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact' style={{ color: 'white', textDecoration: 'none' }}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="searchBar">
                    <input type="text" name="" id="" placeholder='Search here' />
                    <button className='btn'>Search</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar

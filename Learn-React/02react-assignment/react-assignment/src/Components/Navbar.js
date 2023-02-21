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
                            <NavLink to="/">
                                Home
                            </NavLink>

                        </li>
                        <li>
                            <NavLink to="/about">
                                about
                            </NavLink>
                        </li>
                        <li>Assignments
                            <div className="dropdown-menu">
                                <ul>
                                    <li> <NavLink to="/assignment1">
                                        Assignment1
                                    </NavLink></li>
                                    <li>
                                        <NavLink to="/assignment2">
                                            Assignment2
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/assignment3">
                                            Assignment3
                                        </NavLink>
                                    </li>         <li>
                                        <NavLink to="/assignment4">
                                            Assignment4
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/assignment5">
                                            Assignment5
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/routing-assignment">
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
                            <NavLink to='/service'>Service</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact'>
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

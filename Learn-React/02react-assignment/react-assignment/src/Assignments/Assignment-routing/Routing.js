import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import About from './Files/About'
import Contact from './Files/Contact'
import Home from './Files/Home'

const Routing = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/files/home">Home</NavLink>
                    <NavLink to="/files/about">About</NavLink>
                    <NavLink to="/files/contact">Contact</NavLink>
                </li>
            </ul>

            <Routes>
                <Route path="/files/home" element={<Home />} />
                <Route path='/files/about' element={<About />} />
                <Route path='/files/contact' element={<Contact />} />
            </Routes>
        </div>
    )
}

export default Routing

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './Files/About'
import Contact from './Files/Contact'
import Home from './Files/Home'

const RoutingLink = () => {
    return (
        <div>
            <Routes>
                <Route path='/files/home' element={<Home />} />
                <Route path='/files/about' element={<About />} />
                <Route path='/files/contact' element={<Contact />} />
            </Routes>
        </div>
    )
}

export default RoutingLink

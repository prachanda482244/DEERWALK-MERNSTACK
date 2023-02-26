import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Service = () => {
    return (
        <div>
            <h1>Our service</h1>
            <NavLink to='productDetails' style={{ margin: '12px' }}>Product details</NavLink>
            <NavLink to='userDetails'>User details</NavLink>
            <NavLink to='usesearchParams' style={{ margin: '12px' }}>Use search params</NavLink>
            <Outlet />
        </div>
    )
}

export default Service

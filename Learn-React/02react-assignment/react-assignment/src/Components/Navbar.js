import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <div className="logo">
                    React Assignment
                </div>
                <div className="list">

                    <ul>
                        <li>Home</li>
                        <li>about</li>
                        <li>service</li>
                        <li>contact</li>
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

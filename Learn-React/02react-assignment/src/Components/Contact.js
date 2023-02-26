import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
    const navigate = useNavigate()
    const navigatePage = () => {
        navigate('/about', { replace: true })
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <h2 >Contact us</h2>

            <form action="#" style={{ display: 'flex', flexDirection: 'column', width: '20vw', margin: '1rem auto', gap: '1rem' }}>
                <label htmlFor="name">Name</label>
                <input type="text" placeholder='Enter your name' />

                <label htmlFor="email">Email</label>
                <input type="email" placeholder='Enter your Email' />

                <label htmlFor="contact">Contact No</label>
                <input type="text" placeholder='Enter your number' />
                <button type='submit'>Submit</button>
            </form>
            <button onClick={navigatePage}>Go back</button>
        </div>
    )
}

export default Contact

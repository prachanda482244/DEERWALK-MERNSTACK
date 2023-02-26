import React from 'react'
import LoginForm from '../Formik/LoginForm'
import img from '../Images/user.jpg'

const Login = () => {

    return (
        <div className=' flex p-5 justify-around space-x-2 items-center'>
            <div className='image'>
                <img src={img} alt='user' className='rounded-full' />
            </div>
            <div >
                <LoginForm />
            </div>
        </div>
    )
}

export default Login

import React from 'react'
import RegisterForm from '../Formik/RegisterForm'
import img from '../Images/user.jpg'

const Register = () => {

    return (
        <div className=' flex p-5 justify-around space-x-2 items-center'>
            <div className='image'>
                <img src={img} alt='user' className='rounded-full' />
            </div>
            <div >
                <RegisterForm />
            </div>
        </div>
    )
}

export default Register

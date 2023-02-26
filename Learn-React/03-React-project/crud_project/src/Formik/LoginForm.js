import React from 'react'
import { Form, Formik } from 'formik'
import * as yup from 'yup'
import FormikInput from './FormikInput'
import { useNavigate } from 'react-router-dom'
const FormikForm = () => {

    let initialValues = {
        username: '', //must be same with name
        password: ''
    }
    let FormSubmit = (value, other) => {
        console.log(value)
        other.resetForm()
    }
    let validationSchema = yup.object({
        username: yup.string().required("User name is required"),
        password: yup.string().required("Last name is required"),
    })


    let navigate = useNavigate()
    let Goback = () => {
        navigate('/', { replace: true })
    }
    let RegisterPage = () => {
        navigate('/register')
    }

    return (
        <div >
            <Formik
                initialValues={initialValues} onSubmit={FormSubmit} validationSchema={validationSchema}>
                {
                    (formik) => {
                        return (
                            <Form autoComplete="nope"
                                className='border-2 border-zinc-900 p-10 rounded-lg'
                            >
                                <h2 className='text-slate-700 text-3xl text-center'>Login </h2>
                                <div className="m-3 flex space-x-6">
                                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'> Login with facebook</button>
                                    <button className='bg-white hover:bg-slate-800 hover:text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow'>Login with twitter</button>
                                </div>
                                <div className='text-center uppercase text-slate-800'>
                                    <p className='border-b-2 border-2'></p>
                                    or use your email
                                    <p className='border-b-2 border-2'></p>
                                </div>

                                <FormikInput name="username" label='Username' type='email' required={true} />
                                <FormikInput name="password" label='Password' type='password' required={true} />

                                <div className="flex justify-between m-2 items-center">
                                    <div className='text-gray-700 space-x-2'>
                                        <input type="checkbox" id='rmbr' />
                                        <label htmlFor='rmbr'>Remember me</label>
                                    </div>
                                    <p className='capitalize text-gray-400 hover:underline cursor-pointer' >Forget your password?</p>
                                </div>
                                <button type='submit' className='bg-cyan-400 w-full rounded-xl py-2 px-4 mt-2 text-white uppercase'>Submit</button>
                                <div className='text-center uppercase text-slate-800'>
                                    <div className='border-b-2 border-2'></div>
                                    <button type='submit' onClick={RegisterPage} className=' hover:underline border-none my-2'>
                                        Create an account
                                    </button>
                                    <div className='border-b-2 border-2'></div>
                                </div>
                                <button onClick={Goback} className='text-blue-500 mt-3'>Go back</button>

                            </Form>
                        )
                    }
                }
            </Formik>
        </div >
    )
}

export default FormikForm
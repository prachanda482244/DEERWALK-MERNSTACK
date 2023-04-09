import React from 'react'
import { Form, Formik } from 'formik'
import * as yup from 'yup'
import FormikInput from './FormikInput'
import { useNavigate } from 'react-router-dom'
const RegisterForm = () => {

    let initialValues = {
        fullname: '', //must be same with name
        email: '',
        password: '',
        confirmpassword: ''
    }
    let FormSubmit = (value, other) => {
        console.log(value)
        other.resetForm()
    }
    let validationSchema = yup.object({
        fullname: yup.string().required("Full name is required"),
        email: yup.string().required("Email is required"),
        password: yup.string().required("Password is required"),
        confirmpassword: yup.string().required("Confirm password is required"),
    })

    let navigate = useNavigate()
    let Goback = () => {
        navigate('/')
    }

    return (
        <div >
            <Formik
                initialValues={initialValues} onSubmit={FormSubmit} validationSchema={validationSchema}>
                {
                    (formik) => {
                        return (
                            <Form autoComplete="nope"
                                className='border-2 border-zinc-900 p-10 rounded-lg w-[40vw]'
                            >
                                <h2 className='text-slate-700 text-3xl text-center mb-3'>Register </h2>

                                <div className='border-b-2 border-2'></div>

                                <FormikInput name="fullname" type='text' />
                                <FormikInput name="email" type='email' />
                                <FormikInput name="password" type='password' />
                                <FormikInput name="confirmpassword" type='password' />


                                <button type='submit' className='bg-cyan-400 w-full rounded-xl py-2 px-4 mt-4 text-white uppercase'>Create Account</button>
                                <button onClick={Goback} className='text-blue-500 mt-3'>Go back</button>

                            </Form>
                        )
                    }
                }
            </Formik>
        </div >
    )
}

export default RegisterForm
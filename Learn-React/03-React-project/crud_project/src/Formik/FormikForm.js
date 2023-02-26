import React from 'react'
import { Form, Formik } from 'formik'
import * as yup from 'yup'
import FormikInput from './FormikInput'
import { useNavigate } from 'react-router-dom'
const FormikForm = () => {
    //  Meta have 3 things -
    //  value
    // error
    // touched
    // meta={
    // value='',
    // error:'',
    // touched:false
    // }
    let initialValues = {
        username: '', //must be same with name
        password: '',
        // description: '',
        // country: '',
        // gender: '',
        // isMarried: false
    }
    let FormSubmit = (value, other) => {
        console.log(value)
        other.resetForm()
    }
    let validationSchema = yup.object({
        username: yup.string().required("user name is required"),
        password: yup.string().required("Last name is required"),
        // description: yup.string().required("Description is required")
    })

    // validation will run only if
    // onChange event is fire
    //  onBlur(touched) event is fire
    // onSubmit event is fire

    let navigate = useNavigate()
    let Goback = () => {
        navigate('/', { replace: true })
    }


    return (
        <div>
            <Formik
                initialValues={initialValues} onSubmit={FormSubmit} validationSchema={validationSchema}>
                {
                    (formik) => {
                        return (
                            <Form autoComplete="nope"
                            >
                                <FormikInput name="username" label='Username' type='email' required={true} />
                                <br />
                                <br />

                                <FormikInput name="password" label='Password' type='password' onChange={(e) => formik.setFieldValue("password", e.target.value)}
                                    required={true}
                                // style={{ color: 'red' }}
                                />
                                <button type='submit' className=' bg-cyan-400 '>Submit</button>
                                <button onClick={Goback}>GO back</button>

                            </Form>
                        )
                    }
                }
            </Formik>


        </div >
    )
}

export default FormikForm
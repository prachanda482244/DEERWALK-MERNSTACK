import React from 'react'
import { Form, Formik } from 'formik'
import * as yup from 'yup'
import FormikInput from './FormikInput'
import FormikTextArea from './FormikTextArea'
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
        firstname: '', //must be same with name
        lastname: '',
        description: ''
    }
    let FormSubmit = (value, other) => {
        console.log(value)
        other.resetForm()
    }
    let validationSchema = yup.object({
        firstname: yup.string().required("First name is required"),
        lastname: yup.string().required("Last name is required"),
        description: yup.string().required("Description is required")
    })

    // validation will run only if
    // onChange event is fire
    //  onBlur(touched) event is fire
    // onSubmit event is fire
    return (
        <div>
            <Formik
                initialValues={initialValues} onSubmit={FormSubmit} validationSchema={validationSchema}>
                {
                    (formik) => {
                        return (
                            <Form autoComplete="nope"
                            >
                                {/* <Field name="firstname">
                                    {
                                        ({ field, form, meta }) => {
                                            // console.log("fromik", formik)
                                            // console.log("field", field)
                                            // console.log("form", form)
                                            // console.log("meta", meta)
                                            return (
                                                <div>
                                                    <label htmlFor="firstname">First Name</label>
                                                    <input {...field} type="text" id='firstname' placeholder='Enter your firstname'
                                                        value={meta.value}
                                                        onChange={field.onChange}
                                                    // onChange={(e) => {
                                                    //     formik.setFieldValue('firstname', e.target.value)
                                                    // }}
                                                    />
                                                    {
                                                        meta.touched && meta.error ? <div style={{ color: "red" }}>{meta.error}</div> : null
                                                    }
                                                </div>
                                            )
                                        }
                                    }
                                </Field> */}
                                <FormikInput name="firstname" label='Firstname' type='text' required={true} />
                                <br />
                                <br />

                                <FormikInput name="lastname" label='Last Name' type='text' onChange={(e) => formik.setFieldValue("lastname", e.target.value)}
                                // style={{ color: 'red' }}
                                />
                                <br />
                                <FormikTextArea name='description' label='Description' type='text' rows={3} cols={30} />

                                {/* <Field name="description">
                                    {
                                        ({ field, form, meta }) => {
                                            return (
                                                <div>
                                                    <label htmlFor="description">Description</label>
                                                    <input {...field} type="text" id='description' placeholder='Enter your description'
                                                        value={meta.value}
                                                        onChange={(e) => {
                                                            formik.setFieldValue('description', e.target.value)
                                                        }}
                                                    />
                                                    {
                                                        meta.touched && meta.error ? <div style={{ color: "red" }}>{meta.error}</div> : null
                                                    }
                                                </div>
                                            )
                                        }
                                    }
                                </Field> */}

                                <button type='submit'>Submit</button>

                            </Form>
                        )
                    }
                }
            </Formik>


        </div >
    )
}

export default FormikForm

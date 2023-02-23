import { Field } from 'formik'
import React from 'react'

const FormikTextArea = ({ name, label, type, onChange, required, ...props }) => {
    return (
        <div>
            <Field name={name}>
                {
                    ({ field, form, meta }) => {
                        return (
                            <div>
                                <label htmlFor={name}>{label}{required ? <span style={{ color: "red", fontSize: '20px' }}>*</span> : ''} </label>
                                <textarea type={type} {...props} {...field} id={name} placeholder={`Enter your ${name} `}
                                    value={meta.value}
                                    // onChange={field.onChange}
                                    onChange={onChange ? onChange : field.onChange}
                                ></textarea>

                                {
                                    meta.touched && meta.error ? <div style={{ color: "red" }}>{meta.error}</div> : null
                                }
                            </div>
                        )
                    }
                }
            </Field>
        </div>
    )
}

export default FormikTextArea

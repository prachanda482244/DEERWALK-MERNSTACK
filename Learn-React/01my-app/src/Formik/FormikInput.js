import { Field } from 'formik'
import React from 'react'

const FormikInput = ({ name, label, type, onChange, required, ...props }) => {
    return (
        <div>
            <Field name={name}>
                {
                    ({ field, form, meta }) => {
                        return (
                            <div>
                                <label htmlFor={name}>{label}{required ? <span style={{ color: "red", fontSize: '20px' }}>*</span> : ''} </label>
                                <input type={type} {...props} {...field} id={name} placeholder={`Enter your ${name} `}
                                    value={meta.value}
                                    // onChange={field.onChange}
                                    onChange={onChange ? onChange : field.onChange}
                                />

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

export default FormikInput

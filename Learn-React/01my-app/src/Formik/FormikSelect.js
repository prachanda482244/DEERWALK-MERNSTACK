import { Field } from 'formik'
import React from 'react'

const FormikSelect = ({ name, label, onChange, required, options, ...props }) => {
    return (
        <div>
            <Field name={name}>
                {
                    ({ field, form, meta }) => {
                        return (
                            <div>
                                <label htmlFor={name}>{label}{required ? <span style={{ color: "red", fontSize: '20px' }}>*</span> : ''} </label>
                                <select
                                    {...props}
                                    {...field}
                                    id={name}
                                    value={meta.value}
                                    onChange={onChange ? onChange : field.onChange}
                                >
                                    {
                                        options.map((items, i) => {
                                            return (
                                                <option key={i} value={items.value}>{items.label}</option>
                                            )
                                        })
                                    }

                                </select>

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

export default FormikSelect

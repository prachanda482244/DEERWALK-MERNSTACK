import { Field } from 'formik'
import React from 'react'

const FormikSelect = ({ name, label, onChange, required, options, ...props }) => {
    return (
        <div>
            <Field name={name}>
                {
                    ({ field, form, meta }) => {
                        return (
                            <div className='flex flex-col space-y-2 mt-3' >
                                <label htmlFor={name}
                                    className='text-lg text-gray-500 uppercase'
                                >
                                    {label}

                                    {
                                        required ? <span className='text-red-500 text-xs italic'>*</span> : ''} </label>
                                <select
                                    className=' border-2 py-2 px-1 rounded-md border-gray-500 tracking-widest cursor-pointer uppercase text-gray-500'
                                    {...props}
                                    {...field}
                                    id={name}
                                    value={meta.value}
                                    onChange={onChange ? onChange : field.onChange}
                                >
                                    {
                                        options.map((items, i) => {
                                            return (
                                                <option key={i} value={items.value}
                                                    className='uppercase text-gray-500'
                                                >{items.label}</option>
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
            </Field >
        </div >
    )
}

export default FormikSelect
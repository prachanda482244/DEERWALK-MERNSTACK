import { Field } from 'formik'
import React from 'react'

const FormikInput = ({ name, label, type, onChange, required, ...props }) => {
    return (
        <div className='mt-4 '>
            <Field name={name} >
                {
                    ({ field, form, meta }) => {
                        return (
                            <div className='flex flex-col space-y-2'>
                                <label className='-tracking-tight text-lg text-gray-500 uppercase' htmlFor={name}>{label}{required ? <span className="text-red-500 text-xs italic" >*</span> : ''} </label>
                                <input className='border-2 py-2 px-1 rounded-md border-gray-500 tracking-widest' type={type} {...props} {...field} id={name} placeholder={`Enter ${name} `}
                                    value={meta.value}
                                    onChange={onChange ? onChange : field.onChange}
                                    autoComplete="off"
                                />
                                <div className='h-2'>
                                    {
                                        meta.touched && meta.error ? <div className="text-red-500  text-sm italic">{meta.error}</div> : null
                                    }
                                </div>
                            </div>
                        )
                    }
                }
            </Field >
        </div >
    )
}

export default FormikInput
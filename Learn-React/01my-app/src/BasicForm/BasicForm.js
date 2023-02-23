import React, { useState } from 'react'

const BasicForm = () => {
    let [name, setName] = useState('')
    let [description, setDescription] = useState('')
    let [email, setEmail] = useState('')
    let [phoneNo, setPhoneNo] = useState("")
    let [country, setCountry] = useState("")
    let [gender, setGender] = useState('')
    let [isMarried, setIsMarried] = useState(false)
    let [cloath, setCLoath] = useState('')

    let countryOption = [
        {
            label: "Select Country",
            value: 'country',
            disabled: true
        },
        {
            label: "Nepal",
            value: 'nepal'
        },
        {
            label: "India",
            value: 'india'
        },
        {
            label: 'China',
            value: "china"
        },
        {
            label: 'Australia',
            value: 'australia'
        },
        {
            label: 'America',
            value: 'america'
        },
        {
            label: 'Japan',
            value: 'japan'
        }
    ]

    // ALl the form element must have the oncChange and value property(for state management) except for the boxes (check box and radio) that
    // uses checked property of

    // Those input which have option eg(select and radio ) must have value property except checkbox

    // All have e.target.value except for checkbox which has e.target.checked

    let HandleSubmit = (e) => {
        e.preventDefault();
        let info = {
            _name: name,
            _description: description,
            _email: email,
            _phone: phoneNo,
            _country: country,
            _gender: gender,
            _isMarried: isMarried,
            _cloath: cloath
        }

        console.log(info)
        e.target.reset()
    }
    let cloathSize = [
        {
            name: 'Small',
            value: 'sm'
        },
        {
            name: 'Medium',
            value: 'md'
        },

        {
            name: 'Large',
            value: 'lg'
        },

        {
            name: 'Extra large',
            value: 'xl'
        }
    ]
    let genders = [
        {
            name: 'Male',
            value: 'male'
        },
        {
            name: 'Female',
            value: 'female'
        },
        {
            name: 'Other',
            value: 'other'
        }
    ]
    return (
        <div>
            <form action="#" style={{ display: 'flex', flexDirection: 'column', padding: '2.5rem', justifyContent: 'center', alignItems: 'center', fontSize: '20px', border: '2px solid black', width: '40vw', margin: '1rem auto', gap: '1rem' }} onSubmit={HandleSubmit} >

                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder='Enter your name' value={name} onChange={(e) => {
                    setName(e.target.value);

                }} style={{ padding: '.725rem', borderRadius: '10px', borderColor: 'black' }} />

                <label htmlFor="description">Description</label>
                <textarea name="desc" id="description" cols="30" rows="3" value={description} placeholder='Description' onChange={(e) => {
                    setDescription(e.target.value)
                }}></textarea>

                <label htmlFor="email">Email</label>
                <input type="email" id='email' placeholder='Enter your email here' style={{ padding: '.725rem', borderRadius: '10px', borderColor: 'black' }} value={email} onChange={(e) => {
                    setEmail(e.target.value)
                }} />

                <label htmlFor="phone">Phone no</label>
                <input type="number" id='phone' value={phoneNo} style={{ padding: '.725rem', borderRadius: '10px', borderColor: 'black' }} placeholder='Enter your number here' onChange={(e) => {
                    setPhoneNo(e.target.value)
                }} />

                <label htmlFor="country">Country</label>
                <div >
                    <select name="country" id="country" style={{ fontSize: '20px' }}
                        value={country}
                        onChange={(e) => {
                            setCountry(e.target.value)
                        }}
                    >
                        {
                            countryOption.map((item, i) => {
                                return (
                                    <option key={i} value={item.value} disabled={item.disabled}  >{item.label}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div>
                    <label htmlFor="claoth">Cloath Size: </label>
                    <select name="cloath" id="cloath" value={cloath} style={{ fontSize: '20px' }} onChange={(e) => setCLoath(e.target.value)}>
                        {
                            cloathSize.map((item, i) => {
                                return (
                                    <option key={i} value={item.value} >{item.name}</option>
                                )
                            })
                        }

                    </select>

                </div>

                <div  >
                    {genders.map((fuckGender, key) => {
                        return (
                            <div key={key}>
                                <label htmlFor={fuckGender.value}>{fuckGender.name}</label>
                                <input
                                    type="radio"
                                    id={fuckGender.value}
                                    value={fuckGender.value}
                                    checked={gender === fuckGender.value}
                                    onChange={(e) => setGender(e.target.value)}
                                />
                            </div>
                        )
                    })

                    }

                    {/*
                     <label htmlFor="female">Female</label>
                    <input id='female' type="radio" value="female" name='radio' checked={gender === "female"} onChange={(e) => setGender(e.target.value)} />

                    <label htmlFor="other">Other</label>
                    <input id='other' type="radio" name='radio' value="other" checked={gender === "other"} onChange={(e) => setGender(e.target.value)} /> */}

                </div>
                <div>
                    <label htmlFor="isMarried" >Is married</label>
                    <input type="checkbox" checked={isMarried} onChange={(e) => setIsMarried(e.target.checked)} />
                </div>

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default BasicForm
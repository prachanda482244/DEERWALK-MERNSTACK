import React, { useState } from 'react'

const Counter = () => {

    // default values
    let defaultName = 'Enter name from input field'
    let defaultAge = 'Enter Age from input field'
    let defaultAddress = 'Enter address from input field'

    // States and state variables
    let [count, setCount] = useState(0);
    let [name, setName] = useState(defaultName)
    let [age, setAge] = useState(defaultAge)
    let [address, setAddress] = useState(defaultAddress)
    // let [info, setInfo] = useState({ name: defaultName, age: defaultAge, address: defaultAddress })
    // Form variables
    let fieldName = document.getElementById('name')
    let fieldAge = document.getElementById('age')
    let fieldAddress = document.getElementById('address')

    // On click functions
    let HandleDecrement = () => {
        setCount(--count)
    }


    let HandleReset = () => {

        setCount(0);
        setName(defaultName)
        setAge(defaultAge)
        setAddress(defaultAddress)
    }
    let HandleIncrement = () => {
        setCount(++count)
    }
    let HandleAddress = () => {
        address = fieldAddress.value
        if (address === '') {
            alert('Address cant be emptry')
        } else {
            setAddress(address)
            fieldAddress.value = ''
        }
    }

    let HandleName = () => {
        name = fieldName.value
        if (name === '') {
            alert('Name cant be emptry')
        } else {
            setName(name)
            fieldName.value = ''
        }

    }
    let HandleAge = () => {
        age = fieldAge.value
        if (age === '') {
            alert('Age cant be emptry')
        } else {
            setAge(age)
            fieldAge.value = ''
        }
    }
    let HandleDetails = () => {
        name = fieldName.value
        age = fieldAge.value
        address = fieldAddress.value
        if (name === '' || age === '' || address === '') {
            alert('All field required')
        } else {

            setName(name)
            setAge(age)
            setCount(age)
            setAddress(address)
            fieldName.value = ''
            fieldAge.value = ''
            fieldAddress.value = ''
        }
    }
    return (
        <div>
            <h2 style={{ fontSize: '12px', padding: '0 1.4rem', wordSpacing: '2px' }}>Q38  make  a component that is use for increment and decrement ie make a state variable initilize 0 as initialvalue make a button named Increment when it is clicked the variable must be increase by one make a button named Decrement whent it is clicked the variable must be decrease by one
                <br />
                Q39 make a component that  perfom following thing make a state variable as name and initialized with initial value make a state variable as age and initialized with initial value make a state variable as address and initialized with initial value make a button as Change Age when it is click change age variable make a button as Change Name when it is click change name variable make a button as Change Address when it is click change address variable
                <br />
                Q40   make  a component that is use for increment and reset
                ie make a state variable initilize 0 as initialvalue
                make a button named Increment when it is clicked the variable must be increase by one
                make a button named Reset when it is clicked it must be reset the varialbe to 0 ie make variable value as 0</h2>
            <div className='container' >
                <div className='displayContainer'>
                    <h2 style={{ textAlign: 'center', fontWeight: '600', fontSize: '2.5rem' }}>Output</h2>
                    <h1>Counter : <span>{count}</span></h1>
                    <hr />
                    <div className="box">
                        <p>Name:-  {name}</p>
                        <p>Age:-  {age}</p>
                        <p>Address:-  {address}</p>
                        <p>Details:- <br /> Your name  is {name}  and you are {age}yrs old. And you are from {address}</p>

                    </div>
                </div >

                <div className='contain' >

                    <h2 style={{ textAlign: 'center', fontWeight: '600', fontSize: '2.5rem' }}>Input</h2>


                    <div className="inputContainer">
                        <input type="text" id='name' placeholder='Enter name' />
                        <input type="text" id='age' placeholder='Enter age' />
                        <input type="text" id='address' placeholder='Enter address' />
                    </div>
                    <div className='btnContainer'>

                        <button onClick={HandleDecrement}>Decrement</button>
                        <button onClick={HandleReset}>Reset</button>
                        <button onClick={HandleIncrement}>Increment</button>
                        <button onClick={HandleName}>Change name</button>
                        <button onClick={HandleAge}>change age</button>
                        <button onClick={HandleAddress}>change address</button>
                    </div>
                    <button className='detailsBtn' onClick={HandleDetails}>change details</button>
                </div>

            </div>
        </div >
    )
}

export default Counter

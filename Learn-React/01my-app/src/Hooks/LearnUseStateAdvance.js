import React, { useState } from 'react'

// Lecture 4
const LearnUseStateAdvance = () => {
    let [info, setInfo] = useState({
        name: 'Asish Khatri',
        age: 19,
        address: 'Kalimati'
    })

    let HandleName = () => {
        setInfo({
            ...info,
            name: 'Prachanda rana'
        })
    }
    let HandleAge = () => {
        setInfo({

            ...info,
            age: 22
        })
    }
    let HandleAddress = () => {
        setInfo({
            ...info,
            address: 'Ktm'
        })
    }

    // Spread operator
    let arr = [1, 2, 3]
    let arr2 = [4, 5, 6]
    let sprOperator = [...arr, ...arr2]
    console.log(sprOperator)
    return (
        <div>
            Learn use state advance
            <p>{info.name}</p>
            <p>{info.age}</p>
            <p>{info.address}</p>
            <button onClick={HandleName}>Change name</button>
            <button onClick={HandleAge}>Change Age</button>
            <button onClick={HandleAddress}>Change address</button>
        </div>
    )
}

export default LearnUseStateAdvance

import React, { useEffect, useState } from 'react'

const LearnUseEffect = () => {
    let [count, setCount] = useState(0)
    // let [counts, setCounts] = useState(0)
    // // UseEffect will called automatically when the page is rendered
    // useEffect(() => {
    //     console.log("do") // in useEffect the increment willdone first then the alert will call
    // }, [counts]) // epmty array means only run first time when the page is refreshed then wont run

    let HandleUpdate = () => {
        setCount(++count)
        // alert("I am cickefd") // in usestate the increment will be done after the alert
    }
    // let HandleUpdate2 = () => {
    //     setCounts(++counts)
    //     // alert("I am cickefd") // in usestate the increment will be done after the alert
    // }
    useEffect(() => {
        document.title = `you clicked me ${count} times`
    }, [count])

    return (
        <div style={{
            fontSize: '2rem'
        }}>
            Use effect in js
            <br />
            {/* <input type="text" onInput={HandleUpdate} /> */}
            <button onClick={HandleUpdate}>Click me  {count}</button>
            {/* <button onClick={HandleUpdate2}>Click me  {counts}</button> */}
        </div>
    )
}

export default LearnUseEffect

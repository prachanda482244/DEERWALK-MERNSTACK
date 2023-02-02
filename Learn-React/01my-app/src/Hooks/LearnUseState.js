
import { React, useState } from 'react'

const LearnUseState = ({ title }) => {

    let [count, setCount] = useState(0);
    let [name, setName] = useState('nitan')
    let css = {
        padding: '1rem',
        margin: '20px',
        borderRadius: '10px',
        border: 'none',
        outline: '2px solid black',
        width: '50vw'
    }
    let handleClick = () => {
        setCount(++count)
    }
    let handleClickDecrement = () => {
        setCount(--count)
    }
    let handleClickReset = () => {
        setCount(0)
        setName('nitan')
    }
    let handleName = () => {
        setName('shyam')
    }
    let handleDesc = () => {
        setName(' Hello guys')
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            {title}
            <div style={{ fontSize: '5rem' }}>
                {count}
                {name}
            </div>
            <div style={{ height: "20vh", display: "flex", width: '100vw', alignItems: 'center', justifyContent: 'center', gap: '2rem' }}>
                <button onClick={handleClick}>Increment</button>
                <button onClick={handleClickDecrement}>Decrement</button>
                <button onClick={handleClickReset}>Reset</button>
                <button onClick={handleName}>name</button>
                <button onClick={handleDesc}>Some</button>
            </div >
        </div >
    )
}

export default LearnUseState

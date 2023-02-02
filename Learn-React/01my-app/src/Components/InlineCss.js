import React from 'react'

// Lecture 03 React
const inlineCss = ({ str, number, bool }) => {
    let css = {
        backgroundColor: 'black',
        color: 'white',
        padding: '2rem',
        textAlign: 'center'
    }
    return (
        <div style={css}>
            Today we learn about internal css
            <div style={{
                border: '2px solid white',
                width: '50vw',
                margin: '2rem auto',
                letterSpacing: '2px',
                borderRadius: '12px',
                padding: '2rem 0'
            }
            }>
                <h2>This is "{str}"</h2>
                <h2>This is {number} number</h2>

                <h2>This is {bool ? 'true' : 'false'} boolean </h2>
            </div>
        </div>
    )
}

export default inlineCss

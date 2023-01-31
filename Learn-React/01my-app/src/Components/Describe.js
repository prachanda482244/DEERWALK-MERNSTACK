import React from 'react'

const Describe = ({ name, age, nationality }) => {
    return (
        <div className='container' >
            <div className="box">

                <h1 className='black'>Description</h1>
                <div className="line"></div>
                <div className="details">
                    <div className="describe">
                        <h2>Name: {name}</h2>
                        <h3>Age: {age}</h3>
                        <h4>Nationality: {nationality} </h4>
                    </div>
                    <div className="img">
                        <img src="" alt="user" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Describe

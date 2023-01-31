import React from 'react'

const Map = () => {
    let users = [
        {
            name: 'Prachanda Rana',
            role: 'Developer',
            description: 'Developers, also known as software developers or computer programmers, are responsible for developing, coding, installing, and maintaining software systems. '
        },
        {
            name: 'Ramesh khanna',
            role: 'Programmer',
            description: 'Programmers write code for computer programs and mobile applications. They also are involved in maintaining, debugging and troubleshooting systems '
        },
        {
            name: 'Suresh Maharjan',
            role: 'Software Developer',
            description: 'A Software Developer designs and builds computer programs that power mobile devices, desktop computers, and even cars. They not only identify user needs but also create new applications for any given market '
        },
        {
            name: 'Prabin Shrestha',
            role: 'Computer Engineer',
            description: 'Computer hardware engineers research, design, develop, and test computer systems and components such as circuit boards. '
        }
    ]
    let increment = 1

    let showUsers = users.map((user) => {
        return <div className="card">
            <h1 className="heading">User - {increment++}</h1>
            <p>User name:- <span>{user.name}</span></p>
            <p>User role:- <span>{user.role}</span></p>
            <p >{user.description.slice(0, 90)} ... <a href="/notfound">read more</a></p>
            <div className="btnContainer">
                <button className='mapBtn '>Messsage</button>
                <button className='mapBtn mapBtn2'>Contact</button>
            </div>
        </div>
    })

    return (
        <div className='container'>
            {showUsers}
        </div>
    )
}

export default Map

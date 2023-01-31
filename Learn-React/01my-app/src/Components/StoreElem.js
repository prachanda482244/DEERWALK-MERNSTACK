import React from 'react'

const StoreElem = () => {

    // Lecture 02
    let storeElem = <div>Element 1</div>
    // let emptyElem = <div></div>
    let storeElemArray = [
        <div>Div1</div>,
        <div>Div2</div>,
        <div>Div3</div>,
        <div>Div4</div>
    ]

    let animeUsers = [
        {
            name: 'Naruto',
            surname: 'Uzumaki',
            age: 22
        },
        {
            name: 'Itachi',
            surname: 'Uchiha',
            age: 25
        },
        {
            name: 'Madara',
            surname: 'Uchiha',
            age: 30
        }
    ]

    let showUsers = animeUsers.map((user) => {
        return <div>The user name is {user.name} {user.surname} and the age is {user.age} </div>
    })

    return (
        <>
            <div>
                {storeElem}
                {storeElemArray}
            </div>

            <div>{showUsers}</div>

            {/* <div>
                {
                    animeUsers.map((user) => {
                        return <div>{user.name} {user.surname} {user.age} </div>
                    })
                }
            </div> */}
        </>
    )
}

export default StoreElem

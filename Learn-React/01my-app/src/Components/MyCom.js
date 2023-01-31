import React from 'react'
//  components first letter must be capital
export default function MyCom({ name, age, isMarried }) {
    // console.log(props)
    // let { name, age, isMarried } = props
    return (
        <>
            <div>
                i am My com
            </div>
            <div>{name}</div>
            <div>{age}</div>
            <div>{isMarried}</div>
        </>
    )
}

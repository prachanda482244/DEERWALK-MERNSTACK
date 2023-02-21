import React from 'react'
import GrandChild from './GrandChild'

const Child = ({ parentData }) => {
    return (
        <div>
            <GrandChild childData={parentData} />
        </div>
    )
}

export default Child

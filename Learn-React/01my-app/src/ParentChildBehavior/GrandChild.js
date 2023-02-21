import React from 'react'
import SuperGrandchild from './SuperGrandchild'

const GrandChild = ({ childData }) => {
    return (
        <div>
            <SuperGrandchild superGrandChild={childData} />
        </div>
    )
}

export default GrandChild

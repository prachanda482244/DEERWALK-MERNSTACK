import React from 'react'
import Child from './Child'

const Parent = () => {
    let data = 'Passed data from parent to superGrandChild'
    return (
        <div>
            <Child parentData={data} />
        </div>
    )
}

export default Parent

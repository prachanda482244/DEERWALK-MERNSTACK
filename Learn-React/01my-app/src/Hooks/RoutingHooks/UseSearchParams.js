import React from 'react'
import { useSearchParams } from 'react-router-dom'

const UseSearchParams = () => {
    const [searchParams] = useSearchParams()
    return (
        <div>
            name: {searchParams.get('name')}
            age: {searchParams.get('age')}
            address: {searchParams.get('address')}
        </div>
    )
}

export default UseSearchParams

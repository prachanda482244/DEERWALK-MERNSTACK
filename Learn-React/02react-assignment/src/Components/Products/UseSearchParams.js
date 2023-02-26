import React from 'react'
import { useSearchParams } from 'react-router-dom'

const UseSearchParams = () => {
    const [searchParams] = useSearchParams();
    return (
        <div>
            <h2>Use url to see results :- (Use ? before writing)</h2>
            name: {searchParams.get('name')}
            <br />
            age: {searchParams.get('age')}
            <br />
            address: {searchParams.get('address')}
        </div>
    )
}

export default UseSearchParams

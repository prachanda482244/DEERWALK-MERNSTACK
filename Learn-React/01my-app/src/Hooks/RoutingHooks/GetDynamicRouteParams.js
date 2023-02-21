import React from 'react'
import { useParams } from 'react-router-dom'

const GetDynamicRouteParams = () => {
    const params = useParams();
    return (
        <div>
            dynamic parameter
            <br />
            Parameter1: {params.id1}
            <br />
            Parameter1: {params.id2}
        </div>
    )
}

export default GetDynamicRouteParams

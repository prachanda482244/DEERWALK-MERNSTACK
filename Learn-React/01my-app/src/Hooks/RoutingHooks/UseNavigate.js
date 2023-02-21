import React from 'react'
import { useNavigate } from 'react-router-dom'

const UseNavigate = () => {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => {
                navigate("/about", { replace: true })
                // When the login is success replace is true
            }
            }>Navigate</button>
        </div>
    )
}

export default UseNavigate

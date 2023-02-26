import React from 'react'

const AlertMessage = ({ message, className }) => {

    return (
        <div className={`text-center text-3xl uppercase font-light animate-bounce text-${className} h-6 `}>
            {message}
        </div>
    )
}

export default AlertMessage

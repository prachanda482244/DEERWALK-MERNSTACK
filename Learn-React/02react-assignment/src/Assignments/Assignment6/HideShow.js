import React, { useState } from 'react'

const HideShow = () => {
    let [showError, setShowError] = useState(false)
    if (showError === false) {
        <div>Error has occured</div>
    }
    return (
        <div>
            Q49 make a component tha is use to hide and show data
            make a state variable showError and initilized with false
            make a button with name show Error which when clicked  "Error has occured " will shown in userpanel
            make a button with name hide Error whinch when clicked "Error has occurred" will disappear

            <br />
            <button>showError</button>
            <button>HideError</button>
            <br />


            Q50 make a component that is use to hide and  show data
            make a state variable showError and initilized witht false
            Make a  button with name Toggle which clicked
            (on first clicked ) "Error has occured" must be displayed on userPanel
            (on second click) "Error has occured" must be disappeared
            (on third click) " Error has occured" must be displayed on userPanel
            (on fourth click) "Error has occured " must be hide
            .....and show on

        </div>
    )
}

export default HideShow

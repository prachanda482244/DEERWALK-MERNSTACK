import React, { useState } from 'react'

const ChangeTitle = () => {
    let [count, setCount] = useState(0);
    const HandleTitleChange = () => {
        setCount(++count)
        document.title = `You clicked the title ${count} times`
    }
    return (
        <div style={{ padding: '0 1.4rem', wordSpacing: '2px', margin: "2rem" }}>
            Q48 make a component that use useState and useEffect Concept
            make a state variable for title and initilized with title
            make a button when a button is clicked it must change title and based on that title the ueffect fun must run
            useEffect func is able to change document title
            <br />
            <button onClick={HandleTitleChange}>change title</button>
        </div>
    )
}

export default ChangeTitle

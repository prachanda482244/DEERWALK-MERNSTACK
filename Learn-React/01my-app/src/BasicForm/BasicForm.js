import React from 'react'

const BasicForm = () => {
    return (
        <div>
            <form action="#" style={{ display: 'flex', flexDirection: 'column', padding: '2.5rem', justifyContent: 'center', alignItems: 'center', fontSize: '20px', border: '2px solid black', width: '40vw', margin: '1rem auto', gap: '1rem' }}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder='Enter your name' />
                <label htmlFor="description">Description</label>
                <textarea name="desc" id="description" cols="30" rows="3" placeholder='Description'></textarea>
                <label htmlFor="country">Country</label>

                <div >
                    <select name="country" id="country">
                        <option value="nepal">Nepal</option>
                        <option value="india">India</option>
                        <option value="china">China</option>
                    </select>
                </div>
                <div >
                    <label htmlFor="male">Male</label>
                    <input id='male' type="radio" name='radio' />

                    <label htmlFor="female">Female</label>
                    <input id='female' type="radio" name='radio' />

                    <label htmlFor="other">Other</label>
                    <input id='other' type="radio" name='radio' />
                </div>
                <div>
                    <label htmlFor="isMarried">Is married</label>
                    <input type="checkbox" />
                </div>
            </form>
        </div>
    )
}

export default BasicForm

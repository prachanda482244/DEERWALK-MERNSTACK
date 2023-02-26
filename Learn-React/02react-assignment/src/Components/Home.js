import React from 'react'
import logo from './Img/logo.jpg'
const Home = () => {
    return (
        <div>
            <h2>Home page</h2>
            <div style={{ display: 'flex', gap: '.5rem', padding: '1rem', fontSize: '20px', lineHeight: '1.5rem', wordSpacing: '2px' }}>
                <div>
                    <img style={{ height: '50vh', width: '50vw' }} src={logo} alt="imahge" />
                </div>
                <div>
                    As a developer, I believe that the code we write is not just a tool for machines but a way to communicate with other developers and solve real-world problems. It's not just about knowing the syntax or the latest technology, it's about being able to think critically and figure out solutions to complex problems. Debugging can be frustrating, but it's also an opportunity to learn and improve. To succeed in this field, it's important to have a passion for what you do and a willingness to work with others towards a common goal.</div>
            </div>
        </div>
    )
}

export default Home

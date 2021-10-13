import React from 'react'

const Home = (props) => {
    document.title = "Home"
    return (
        <div>
            <h1>Its a {props.name} !</h1>
        </div>
    )
}

export default Home

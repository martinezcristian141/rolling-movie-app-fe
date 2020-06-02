import React, { useState, useEffect } from 'react'
import './Home.css'

const Home = () => {
    return (
        <>
            <div className='Home'>
                <div className="container" style={homeTitleStyle}>
                    <h1 className='home-title'>Home</h1>
                </div>
                {/* <MovieList /> */}
            </div>
        </>
    )
}


// Using styled component for the home component
const homeTitleStyle = {
    display: 'flex',
    alignItems: 'center',
    minHeight: 150
}


export default Home
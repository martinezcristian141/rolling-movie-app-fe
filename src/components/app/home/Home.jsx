import React from 'react'
import './Home.css'
import ListMovies from '../movies/ListMovies'

const Home = () => {
    return (
        <>
            <div className='Home'>
                <div className="container">
                    <h1 className='home-title'>Home</h1>
                </div>
                {/* <MovieList /> */}
            </div>
            <ListMovies />
        </>
    )
}

export default Home
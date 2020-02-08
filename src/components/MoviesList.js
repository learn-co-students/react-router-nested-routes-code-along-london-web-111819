import React from 'react'
import { Link } from 'react-router-dom'

const MoviesList = ({ movies }) => {
    const movieIds = Object.keys(movies)
    const renderMovies = () => {
        return (
            movieIds.map(movieId => {
                return (
                    <Link key={movieId} to={`/movies/${movieId}`}>
                        {movies[movieId].title}
                        <br/>
                    </Link>
                )
            })
        )
    }

    return (
        <React.Fragment>
            {renderMovies()}
        </React.Fragment>
    )

}


export default MoviesList
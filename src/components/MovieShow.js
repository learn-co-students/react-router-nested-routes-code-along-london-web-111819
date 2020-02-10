import React from 'react'

const MovieShow = ({match, movies}) => {
    // debugger
    const movieTitle = movies[match.params.movieId].title
    return (
        <div>
            <h3>{movieTitle}</h3>
        </div>
    )
}

export default MovieShow
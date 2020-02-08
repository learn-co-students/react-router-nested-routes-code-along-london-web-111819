// .src/containers/MoviesPage.js
import React from 'react';
import { Route } from 'react-router-dom';
import MoviesList from '../components/MoviesList';
import MovieShow from '../components/MovieShow'

const MoviesPage = ({ match, movies }) => {
  return (
  <div>
    <MoviesList movies={movies} />
    <Route exact path={match.url} render={() => <h3>lol</h3>}/>
    <Route path={`${match.url}/:movieId`} 
      render={props => <MovieShow {...props} movies={movies} />}
    />
  </div>
  )
  // debugger
}


export default MoviesPage

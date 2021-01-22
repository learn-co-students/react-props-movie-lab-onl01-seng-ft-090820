import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map((movie, key) =>
      <MovieCard key={key} genres={movie.genres} title={movie.title} IMDBRating={movie.IMDBRating} poster={movie.poster} />)
  };

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  };
}

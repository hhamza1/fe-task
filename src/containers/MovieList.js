import React from 'react';
import Movie from '../components/Movie';


const MovieList = () => {
    const movieList = require('../data/movielist.json');

    return (
        <div className="container">
            {
                movieList.map(movie => {
                    return <Movie key={movie.id} movie={movie} />
                })
            }
        </div>
    );
}

export default MovieList;
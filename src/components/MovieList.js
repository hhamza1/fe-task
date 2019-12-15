import React from 'react';
import Movie from './Movie';



const MovieList = () => {
    const movies = require('../data/movielist.json');
    return(
        <div className="container">
            {
                movies.map((movie) => {
                    return <Movie key={movie.id} movie={movie} />
                })
            }
        </div>
    );
}

export default MovieList;
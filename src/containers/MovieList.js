import React from 'react';
import Movie from '../components/Movie';


const MovieList = (props) => {

    return (
        <div className="container">
            {
                props.movieList.map(movie => {
                    return <Movie key={movie.id} movie={movie} getMovieId={props.getMovieId} />
                })
            }
        </div>
    );
}

export default MovieList;
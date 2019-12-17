import React from 'react';
import { ScoreBar, ScoreBarBg, Button } from './styled-components/index';
import './sass/Movie.scss';


const Movie = (props) => {
    const {movie} = props;

    const durationConverter = duration => {
        duration = duration.match(/[0-9]+/);
        let hours = Math.floor(duration / 60);
        let minutes = duration % 60;
        return `${hours}h ${minutes}min`;
    }

    return (
        <div className="movie">
            <div className="movie__poster">
                <img src={movie.posterurl} alt={movie.originalTitle} />
            </div>
            <div className="movie__details">
                <h1 className="header--1">
                    {movie.originalTitle}
                </h1>
                <h5 className="header--5">{`${movie.year} · ${movie.genres.map(genre => ` ${genre} ` )} · ${durationConverter(movie.duration)} `}</h5>
                <h3 className="header--3">{movie.imdbRating}<span className="header--span">/10</span></h3>
                <ScoreBarBg >
                    <ScoreBar width={movie.imdbRating} />
                </ScoreBarBg>
            </div>
            <Button>movie details</Button>
        </div>
    );
}


export default Movie;

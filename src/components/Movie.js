import React from 'react';
import './sass/modules/Movie.scss';



const Movie = (props) => {
    const {movie} = props;
    const durationConverter = duration => {
        duration = duration.match(/[0-9]+/);
        let hours = Math.floor(duration / 60);
        let minutes = duration % 60;
        return `${hours}h ${minutes}min`;
    }

    return(
        <div className="movie-card">
            <img
                className="movie-card__img"
                src={movie.posterurl} 
                alt={movie.originalTitle} />
            <div className="movie-card__details">
                <h1 className="movie-card__title">{movie.originalTitle}</h1>
                <p className="movie-card__info">{`${movie.year} · ${movie.genres.map(genre => ` ${genre} `)} · ${durationConverter(movie.duration)}`}</p>
                <p className="movie-card__score">
                    <span className="movie-card__score--scored">{movie.imdbRating}</span>/10
                </p>
                <div className="movie-card__scorebar"></div>
                <button className="movie-card__btn">movie details</button>
            </div>
        </div>
    );
}

export default Movie;
import React, {Component} from 'react';
import './sass/Movie.scss';
import { ScoreBar, ScoreBarBg, Button } from './styled-components/index';
import durationConverter from './functions/durationConverter';
import {Link} from 'react-router-dom';


class Movie extends Component {
    

 

    render() {
        const { movie, getMovieId } = this.props;

        return (
            <div className="movie" movie={movie.id}>
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
                    <Link className="link" to={`/movie/${movie.id}`}><Button id={movie.id} onClick={getMovieId}>movie details</Button></Link>
                    
                </div>
            </div>
        
    );
    }
}



export default Movie;

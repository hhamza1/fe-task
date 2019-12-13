import React from 'react';
import './sass/modules/Movie.scss';



const Movie = () => {
    return(
        <div className="movie-card">
            <img
                className="movie-card__img"
                src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY500_CR0,0,337,500_AL_.jpg" 
                alt="movie poster" />
            <div className="movie-card__details">
                <h1 className="movie-card__title">The Dark Knight</h1>
                <p className="movie-card__info">2019 · Crime, Drama, Thriller · 2h 2min</p>
                <p className="movie-card__score">
                    <span className="movie-card__score--scored">8.7</span>/10
                </p>
                <div className="movie-card__scorebar"></div>
                <button className="movie-card__btn">movie details</button>
            </div>
        </div>
    );
}

export default Movie;
import React, {Component} from 'react';
import {connect} from 'react-redux'
import {ScoreBar, ScoreBarBg, WatchListButton} from './styled-components/index';
import durationConverter from './functions/durationConverter';
import {toggleWishlist, getMovieDetails} from '../actions/actions';
import './sass/MovieDetails.scss';
class MovieDetails extends Component{

componentDidMount() {
    this.props.onGetMovieDetails();
}

displayCast = (array) => {
    return (array.join(", "));
}

render() {
    const {isAdded, onToggleWishList, movieDetails} = this.props;
        return (
            <div className="movie-details">
                <div className="movie-details__poster">
                    <img 
                        src={movieDetails.posterurl}
                        alt={movieDetails.originalTitle} />
                    <span className={isAdded === false ? "watchlist-btn" : "watchlist-btn watchlist-btn--remove"} onClick={onToggleWishList}>
                        <span className={isAdded === false ? "hr" : "hr hr--remove"}></span>
                        <span className={isAdded === false ? "vr" : "vr vr--remove"}></span>
                    </span>
                </div>
                <div className="movie-details__info">
                    <h3>{movieDetails.originalTitle}</h3>
                    <span className="movie-details__info--rating">{movieDetails.imdbRating}</span>
                    <ScoreBarBg className="scorebar">
                        <ScoreBar width={movieDetails.imdbRating} />
                    </ScoreBarBg>
                </div>
                <h5 className="movie-details__subtitle">{`${movieDetails.year} · ${movieDetails.genres.map(genre => ` ${genre} ` )} · ${durationConverter(movieDetails.duration)}`}</h5>
                <p className="movie-details__synopsis">
                    {movieDetails.storyline}
                </p>
                <div className="movie_details__bottom">
                    <hr className="horizontal-rule"/>
                    <ul className="cast-info">
                        <span><label>Directors: </label><li className="cast">{movieDetails.directors}</li></span>
                        <span><label>Writers: </label><li className="cast">{`${this.displayCast(movieDetails.writers)}`}</li></span>
                        <span><label>Stars: </label><li className="cast">{`${this.displayCast(movieDetails.actors)}`}</li></span>
                    </ul>
                    <WatchListButton className={isAdded === false ? '' : 'remove'} onClick={onToggleWishList}>
                    </WatchListButton>
                </div>
            </div>
        )
}    
    
}

const mapStateToProps = (state) => {
    return {
        isAdded: state.getMovieId.isAdded,
        watchList: state.toggleWishlist.watchList,
        movieDetails: state.getMovieDetails.movieDetails
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onToggleWishList : () => dispatch(toggleWishlist()),
        onGetMovieDetails: (event) => dispatch(getMovieDetails(event))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
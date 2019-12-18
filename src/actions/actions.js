import {
    TOGGLE_WISHLIST,
    GET_MOVIELIST,
    GET_MOVIE_DETAILS,
    GET_MOVIE_ID
} from '../constants/constants';



export const toggleWishlist = (watchElement) => ({type: TOGGLE_WISHLIST, payload: watchElement});
export const getMovieList = (movieList) => ({type: GET_MOVIELIST, payload: movieList});
export const getMovieDetails = (movieDetails) => ({type: GET_MOVIE_DETAILS, payload: movieDetails});
export const getMovieId = (e) => ({type: GET_MOVIE_ID, payload: e.target.id});
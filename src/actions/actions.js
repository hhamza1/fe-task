import {
    TOGGLE_WISHLIST,
    GET_MOVIELIST,
    GET_MOVIE_DETAILS_PENDING,
    GET_MOVIE_DETAILS_SUCCESS,
    GET_MOVIE_DETAILS_FAILURE,
    GET_MOVIE_ID
} from '../constants/constants';



export const toggleWishlist = (watchElement) => ({type: TOGGLE_WISHLIST, payload: watchElement});
export const getMovieList = (movieList) => ({type: GET_MOVIELIST, payload: movieList});
export const getMovieId = (e) => ({type: GET_MOVIE_ID, payload: e.target.id});


export const getMovieDetails = (id) =>  dispatch => {
    dispatch({type: GET_MOVIE_DETAILS_PENDING});
    fetch(`../data/${id}.json`)
    .then(res => dispatch({type: GET_MOVIE_DETAILS_SUCCESS, payload: res.data}))
    .catch(error => dispatch({type: GET_MOVIE_DETAILS_FAILURE, payload: error}));
}
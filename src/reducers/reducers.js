import {
    TOGGLE_WISHLIST,
    GET_MOVIELIST,
    GET_MOVIE_ID,
    GET_MOVIE_DETAILS
} from '../constants/constants';
import data from '../data/movielist.json';

const initialStateList = {
    movieList:[]
}

export const getMovieList =(state=initialStateList, action={}) => {
    switch(action.type){
        case GET_MOVIELIST:
            return Object.assign({}, state, { movieList : data});
        default:
            return state;
    }
}

const initialStateDetails = {
    id: window.location.pathname.match(/[1-9]+/),
    movieDetails: {},
    watchList: [
        {
            isAdded: false,
            originalTitle: ''
        }
    ],
}

export const getMovieId = (state=initialStateDetails, action={}) => {
    switch(action.type) {
        case GET_MOVIE_ID:
           return Object.assign({}, state, {id : action.payload});
        default:
            return state;
    }
}

export const getMovieDetails = (state=initialStateDetails, action={}) => {
    switch(action.type) {
        case GET_MOVIE_DETAILS:
            const movieDetails = require(`../data/${state.id}.json`);
           return Object.assign({}, state, {movieDetails: state.movieDetails.assign(movieDetails)});
        default:
            return state;
    }
}




export const toggleWishlist = (state=initialStateDetails, action={}) => {
        switch(action.type){
        case TOGGLE_WISHLIST:
            if(state.movieDetails !== {}){
                if(state.watchList.isAdded === false) {
                    return Object.assign({}, state, {
                        watchList : state.watchList.concat({isAdded: true, originalTitle: state.getMovieId.movieDetails.originalTitle})
                    });
                }
                else {
                    return Object.assign({}, state, {
                        watchList : state.watchList.concat({
                            originalTitle : "",
                            isAdded : false
                        })
                    });
                }
            }
            else{
                return state;
            }

            default:
               return state;     
    }
}
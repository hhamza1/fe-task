import {
    TOGGLE_WISHLIST,
    GET_MOVIELIST,
    GET_MOVIE_ID,
    GET_MOVIE_DETAILS_PENDING,
    GET_MOVIE_DETAILS_SUCCESS,
    GET_MOVIE_DETAILS_FAILURE
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
    id: window.location.pathname.match(/[0-9]+/),
    movieDetails: {},
    watchList: [],
    isAdded: false,
    isPending: false,
    error:''
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
    switch(action.type){
        case GET_MOVIE_DETAILS_PENDING:
            return Object.assign({}, state, {isPending : true});
        case GET_MOVIE_DETAILS_SUCCESS:
            return Object.assign({}, state, { movieDetails: action.payload, isPending: false});
        case GET_MOVIE_DETAILS_FAILURE:
            return Object.assign({}, state, { error: action.payload, isPending: false});
        default:
            return state;
        }
}




export const toggleWishlist = (state=initialStateDetails, action={}) => {
        switch(action.type){
        case TOGGLE_WISHLIST:
            if(state.movieDetails !== {}){
                if(state.watchList.filter(element => element !== state.movieDetails.originalTitle)){
                    if(state.isAdded === false) {
                        return Object.assign({}, state, {
                            watchList : state.watchList.concat(state.movieDetails.originalTitle) ,
                            isAdded : true
                        });
                    }
                    else {
                       return Object.assign({}, state, {
                            watchList: state.watchList.filter(element => element !== state.movieDetails.originalTitle),
                            isAdded : false
                       });
                    }
                }
                else {
                    if(state.isAdded === true) {
                        return Object.assign({}, state, {
                            watchList : state.watchList.filter(element => element !== state.movieDetails.originalTitle),
                            isAdded : false
                        });
                    }
                    else {
                        return Object.assign({}, state, {
                            watchList : state.watchList.concat(state.movieDetails.originalTitle) ,
                            isAdded : true
                        });
                     }  
                    }
                }
                break;
            default:
               return state;     
    }
}
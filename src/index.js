import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import './index.scss';
import App from './containers/App';
import {getMovieList, toggleWishlist, getMovieId, getMovieDetails} from './reducers/reducers';

const rootReducer = combineReducers({getMovieList, toggleWishlist, getMovieId, getMovieDetails});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));


render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));


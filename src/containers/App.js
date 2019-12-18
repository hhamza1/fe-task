import React, {Component} from 'react';
import MovieList from '../containers/MovieList';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MovieDetails from '../components/MovieDetails';
import {
    getMovieList,
    getMovieId,
} from '../actions/actions';

class App extends Component {

componentDidMount() {
this.props.onMovieList();

}



render(){
    const { movieList, onGetMovieId} = this.props;
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <MovieList movieList={movieList} getMovieId={onGetMovieId} />
                </Route>
                <Route path="/movie/:id" render={(props) => <MovieDetails {...props}/>}>
                </Route>
            </Switch>
        </Router>
    );
}
}

const mapStateToProps = state => {
    return {
      movieList: state.getMovieList.movieList,
      id: state.getMovieId.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onMovieList : () => dispatch(getMovieList()),
        onGetMovieId: () => dispatch(getMovieId()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);



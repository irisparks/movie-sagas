import React, { Component } from 'react';
import { HashRouter as Link, Route, Router} from 'react-router-dom';
import { connect } from 'react-redux';
import MovieDetails from '../MovieDetails/MovieDetails'
import { withRouter } from 'react-router-dom';

class Movie extends Component {
  // Renders the entire app on the DOM
componentDidMount() {
    this.getMovie()
}
  getMovie() {
    this.props.dispatch({ type: 'GET_MOVIE' })
}
  render() {
    return (
      <>
    <div>Movie Page:</div>
    {this.props.reduxState.movies.map((movie, i) => {
                        return (
                        <>
                        <div key={i}>{movie.title}</div>
                            <img src={movie.poster} />
                            <p>{movie.description}</p>
                            </>)
                    })}

 <pre>
          {JSON.stringify(this.props.reduxState, null, 2)}
        </pre>
     </>
    );
  }
}
const mapReduxStateToProps = reduxState => ({
  reduxState,
});


export default withRouter(connect(mapReduxStateToProps)(Movie));






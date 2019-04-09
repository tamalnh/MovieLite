import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getInitialMovieToShowHomepage, addMovieToBookmark } from '../../../store/action/movie.action';


import Movie from './movie';


import './homeContent.css'

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    addBookmark = id => {
        this.props.addMovieToBookmark(id)
        
    }

    renderMovie = ({ movies }) => {
        if (movies.length > 0) {
            return movies.map(movie => {
                return (
                    <Movie key={movie.imdbID} movie={movie} addBookmark={this.addBookmark} />
                )
            })

        } else {
            return (
                <h1>loading..............</h1>
            )
        }
    }


    componentDidMount() {
        this.props.getInitialMovieToShowHomepage()
    }

    render() {
        // console.log(this.props);
        
        return (
            <div className="content-slide section-padding">
                <div className="container">
                    <div className="row movies-row">
                        {this.renderMovie(this.props)}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    // console.log(state);

    return {
        movies: state.movies.movies, 
    }
}

export default connect(mapStateToProps, { getInitialMovieToShowHomepage, addMovieToBookmark })(Movies);
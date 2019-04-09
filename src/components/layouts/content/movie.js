import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {getSearchMovieItemDesc, getAllBookmarkedMovie } from '../../../store/action/movie.action';
import {connect} from 'react-redux';

class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }



    renderSingleMovie = (movie) =>{  
        this.props.getSearchMovieItemDesc(movie.imdbID)
    }


    addMovieToBookmark = (event, id) => {
        event.preventDefault();
        this.props.addBookmark(id);
    }



    componentDidMount(){
        this.props.getAllBookmarkedMovie() 
    }
    
    render() {
        // console.log(this.props);
        
        const {movie} = this.props;
        return (

            <div className="col-sm-3">
                <div className="single-movie">
                    <Link to={`/movie/${movie.imdbID}`}><img src={movie.Poster} alt={movie.Poster} onClick={() => this.renderSingleMovie(movie)} /></Link>
                    <div className="details-btn">
                        <Link to={`/movie/${movie.imdbID}`} onClick={() => this.renderSingleMovie(movie)}>
                            <i className="fas fa-glasses"></i>
                        </Link> 
                        <Link to="#" className="fevorite" onClick={event => this.addMovieToBookmark(event, movie.imdbID)}><i className="fas fa-heart"></i></Link> 
                    </div>

                    <div className="movie-meta">
                        <h6>{movie.Title}</h6>
                        <div className="category">
                            <span>{movie.Type}</span> 
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        bookmarked: state.movies.bookmarkedMovie
    }
}

export default connect(mapStateToProps, {getSearchMovieItemDesc, getAllBookmarkedMovie})(Movie);
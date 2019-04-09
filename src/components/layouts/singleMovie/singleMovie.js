import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSearchMovieItemDesc } from '../../../store/action/movie.action';


import './singleMovie.css'

class SingleMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: ''
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            movie: nextProps.selectedMovie
        })
    }

    componentDidMount() {
        const id = this.props.match.params.id
        if (!this.state.movie) {
            this.props.getSearchMovieItemDesc(id)
        }


    }

    renderContent = () => {
        const { movie } = this.state;
        if (movie) {
            return (
                <div className="single-movie-slide">
                    <div className="container">

                        <div className="row">
                            <div className="col-sm-12 text-center">
                                <h4 className="display-4 mb-3">{movie.Title}</h4>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-4">
                                <img src={movie.Poster} alt="image" />
                            </div>

                            <div className="col-sm-6">
                                <ul className="movie-desc-meta">
                                    <li>Geners: <span>{movie.Genre}</span></li>
                                    <li>Type: <span>{movie.Type}</span></li>
                                    <li>Year: <span>{movie.Year}</span></li>
                                    <li>Released: <span>{movie.Released}</span></li>
                                    <li>Runtime: <span>{movie.Runtime}</span></li>
                                    <li>Language: <span>{movie.Language}</span></li>
                                    <li>Country: <span>{movie.Country}</span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="row py-3">
                            <div className="col-sm-12">
                                <div className="movie-desc-details">
                                    <p className="lead">
                                        <span>Awards:</span>{movie.Awards}
                                    </p>
                                    <p className="lead">
                                        <span>Directors:</span>{movie.Director}
                                    </p>
                                    <p className="lead">
                                        <span>Cast:</span> {movie.Actors}
                                    </p>
                                    <p className="lead">
                                        <span>Movie Description: :</span> {movie.Plot}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <h3 className="display-4">Loading.............</h3>
            )
        }
    }




    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        selectedMovie: state.movies.selectedMovie
    }
}

export default connect(mapStateToProps, { getSearchMovieItemDesc })(SingleMovie);
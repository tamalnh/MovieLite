import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {getMovieBySearch, getSearchMovieItemDesc} from '../../../store/action/movie.action'; 

import SingleMovie from '../singleMovie/singleMovie'


class SortNav extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            keyword: ''
         }
    }

    searchFormHandler = e => {
        e.preventDefault();
        this.props.getMovieBySearch(this.state.keyword);
        
    }

    searchHandler = event => {
        this.setState({
            keyword: event.target.value
        })

        this.props.getMovieBySearch(this.state.keyword);
    }

    componentDidMount(){
        this.setState({
            keyword: ''
        })
    }



    renderSearchResult = ({searchMovie}) => {// start from here search link item
        if(searchMovie){ 
            return(
                <Link to={`/movie/${searchMovie[0].imdbID}`} className="search-item" onClick={() => this.renderSeachMoive(searchMovie[0])}> 
                    <img src={searchMovie[0].Poster} />
                    <span> {searchMovie[0].Title} </span> {searchMovie[0].Year}
                </Link>
            )
        }
    }

    renderSeachMoive = (movie) => { 
        this.props.getSearchMovieItemDesc(movie.imdbID) 
    }



    render() { 
        // console.log(this.props);
        
        return ( 
            <div className="sorting-nav">
            <div className="container">
                <div className="row">
                    <div className="offset-sm-2 col-sm-8">
                        <div className="movie-search">
                            <form className="d-flex" onSubmit={this.searchFormHandler}>
                                <input 
                                    type="text" 
                                    name="search" 
                                    className="form-control" 
                                    placeholder="search here...."
                                    defaultValue={this.state.keyword}
                                    onChange={this.searchHandler}/>
                            </form>

                            {this.renderSearchResult(this.props)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
         );
    }
}

const mapStateToProps = state => {
    // console.log(state.movies);
    
    return {
        searchMovie: state.movies.searchMovie,
        selectedMovie: state.movies.selectedMovie

    }
}


export default connect(mapStateToProps, {getMovieBySearch, getSearchMovieItemDesc})(SortNav);
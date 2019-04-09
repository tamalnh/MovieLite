import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllBookmarkedMovie } from '../../../store/action/movie.action';

class Bookmark extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

componentDidMount(){
    const {isAuthenticated} = this.props.user;
    if(!isAuthenticated){
        this.props.history.push('/')
    }

    this.props.getAllBookmarkedMovie();


}

renderBookmarkMovie(){
    if(this.props.bookmark){

        const {movies} = this.props.bookmark;
        if(movies.length > 0){
            return movies.map(movie => { 
                return (
                    <Link to={`/movie/${movie.movieID}`} key={movie.movieID} className="col-sm-3">
                        <div className="card">
                            <img className="card-img-top" src={movie.thumbnail} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title text-dark">{movie.name}</h5>
                            </div>
                        </div>
                    </Link>
                )
            })
        }
    }else{
       return( <h2 className="display-4">loading......</h2>)
    }

    
}

    render() { 
        // console.log(this.props);
        
        return ( 
            <div className="bookmark-slide margin-top">
                <div className="container">
                    <div className="row">
                        {this.renderBookmarkMovie()}
                    </div>
                </div>
            </div>
         );
    }
}

const mapStateToProps = state => {     
    return {
        bookmark: state.movies.bookmarkedMovie,
        user: state.user
    }
}


 
export default connect(mapStateToProps, {getAllBookmarkedMovie})(Bookmark);
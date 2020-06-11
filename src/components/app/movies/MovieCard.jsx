import React from 'react'
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
    constructor(props) {
      super();
      this.state = {
        movie: props.movie
      }
    }
    render() {
      return (
        <div className="col-6 col-sm-4 col-md-3 col-xl-2">
          <div className="card">
            <div className="card__cover">
              <img src={this.state.movie.poster_url} alt="" />
              <Link to={`/movie/${this.state.movie._id}`} className="card__play">
                <i className="icon ion-ios-play"></i>
              </Link>
              <span className="card__rate card__rate--green">{this.state.movie.rating}</span>
            </div>
            <div className="card__content">
              <h3 className="card__title"><a href="/#">{this.state.movie.title}</a></h3>
              <span className="card__category">
                <a href="/#">Action</a>
                <a href="/#">Triler</a>
              </span>
            </div>
          </div>
        </div>
      );
    }
  }

  export default MovieCard
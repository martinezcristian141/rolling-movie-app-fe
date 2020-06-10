import React from 'react'
import './ListMovies.css'
import './MovieCard.css'
import MovieDB from '../../../services/MovieDB'

class ListMovies extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

  render() {
    // lisMovies es un Array de elementos de React.
    const listMovies = this.state.movies.map((movie) => {
      return <MovieCard movie={movie} key={movie.id} />
    })
    return (
      <section className="content">
        <div className="content__head">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* content title */}
                <h2 className="content__title">New items</h2>
                {/* end content title */}
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          {/* content tabs */}
          <div className="tab-content">
            <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="1-tab">
              <div className="row">
                {listMovies}
              </div>
            </div>
          </div>
          {/* end content tabs */}
        </div>
      </section>
    );
  }

  componentDidMount() {
    MovieDB.movies(1, 'popular').then(movies => {
      let state = this.state;
      state.movies = movies;
      this.setState(state)
    })
  }
}

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
            <img src={this.state.movie.image} alt="" />
            <a href="/#" className="card__play">
              <i className="icon ion-ios-play"></i>
            </a>
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

export default ListMovies;
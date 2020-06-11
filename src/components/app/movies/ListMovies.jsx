import React from 'react'
import './ListMovies.css'
import './MovieCard.css'
import MovieApi from '../../../services/MovieApi'
import MovieCard from './MovieCard'

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
      return <MovieCard movie={movie} key={movie._id} />
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
    MovieApi.getMovies().then(movies => {
      let state = this.state;
      state.movies = movies;
      this.setState(state)
    })
  }
}

export default ListMovies;
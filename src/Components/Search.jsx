import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getMovies, addMovieFavorite } from "../Redux/action/Actions";
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import SearchIcon from '@mui/icons-material/Search';



export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">
              Película:{" "}
            </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
          {this.props.movies?.map((movie) => {
            return (
              <li key={movie.imdbID}>
                <Link to={`/movie/${movie.imdbID}`}>{movie.Title}</Link>
                <p>{movie.Year}</p>
                <button
                  onClick={() =>
                    this.props.addMovieFavorite({
                      title: movie.Title,
                      id: movie.imdbID,
                    })
                  }
                >
                  Fav
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

// connect(mapState, mapDispatch)(Buscador)

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded,
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     addMovieFavorite: (movie) => dispatch(addMovieFavorite(movie)),
//     getMovies: (title) => dispatch(getMovies(title)),
//   };
// }

export default connect(mapStateToProps, { getMovies, addMovieFavorite })(
  Buscador
);
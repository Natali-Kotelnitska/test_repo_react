// import logo from './logo.svg';
import React, { Component } from "react";
import movies from "./components/base/data.json";
import mapper from "./utils/mapper";
import { Button } from "./components/Button/button";
import { GalleryList } from "./components/Gallery/GalleryList";
import "./App.css";

class App extends Component {
  state = {
    movies: mapper(movies),
    isShown: false,
  };

  showFilms = () => {
    this.setState((prevState) => ({
      isShown: !prevState.isShown,
    }));
  };

  toggleWatched = (id) => {
    this.setState((prevState) => ({
      movies: prevState.movies.map((movie) => {
        if (movie.id === id) {
          return { ...movie, isWatched: !movie.isWatched };
        }
        return movie;
      }),
    }));
  };

  render() {
    const { isShown, movies } = this.state;
    return (
      <>
        <Button showFilms={this.showFilms} isShown={isShown} />
        {isShown && (
          <GalleryList movies={movies} toggleWatched={this.toggleWatched} />
        )}
      </>
    );
  }
}

export default App;

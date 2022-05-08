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

  render() {
    const { isShown, movies } = this.state;
    return (
      <>
        <Button showFilms={this.showFilms} isShown={isShown} />
        {isShown && <GalleryList movies={movies} />}
      </>
    );
  }
}

export default App;

//  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//      </header>
//    </div>
//  );

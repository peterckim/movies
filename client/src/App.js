import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/" render={() => <HomePage />} />
            <Route exact path="/movies" render={MoviePage} />
            <Route
              path={`/movies/:movieId`}
              render={routerProps => <MoviePage {...routerProps} />}
            />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

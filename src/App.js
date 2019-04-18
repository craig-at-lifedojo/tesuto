import React, { Component } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ContentList from "./ContentList";

const listContainerStyle = {
  padding: "30px",
  margin: "30px",
  textAlign: "left",
  border: "solid 1px #88c057"
};

const linkStyle = {
  padding: "10px",
  margin: "10px"
};

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <img
              src="http://c93fea60bb98e121740fc38ff31162a8.s3.amazonaws.com/wp-content/uploads/2017/02/lifedojo.jpg"
              height="100"
              width="100"
              alt="logo"
            />
          </header>

          <Route
            path="/"
            exact
            render={() => {
              return (
                <div style={listContainerStyle}>
                  <h3>Here is you're Week 1 training list!</h3>

                  <ul>
                    <ContentList />
                  </ul>
                </div>
              );
            }}
          />

          <Route
            path="/about"
            exact
            render={() => {
              return <div style={listContainerStyle}> About Us </div>;
            }}
          />

          <Route
            path="/contact"
            exact
            render={() => {
              return <div style={listContainerStyle}> Contact Us </div>;
            }}
          />

          <footer>
            <span style={linkStyle}>
              <Link to="/">Home</Link>
            </span>
            <span style={linkStyle}>
              <Link to="/about">About</Link>
            </span>
            <span style={linkStyle}>
              <Link to="/contact">Contact</Link>
            </span>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;

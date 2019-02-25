import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import CardList from './CardList'
import Card from './Card'

const listContainerStyle = {
  padding: '30px',
  margin: '30px',
  textAlign: 'left',
  border: 'solid 1px #88c057'
}

const linkStyle = {
  padding: '10px',
  margin: '10px',
}

class App extends Component {

  render() {
    return (
      <Router>
      <div>
        <Route path='/' exact render={ ()=> { return (
          <div className='App'>
            <header>

              <img src='http://c93fea60bb98e121740fc38ff31162a8.s3.amazonaws.com/wp-content/uploads/2017/02/lifedojo.jpg' 
                    height='100' width='100' alt="logo" />

              <h1 className="App-title">
                Welcome to LifeDojo
              </h1>
            
            </header>

            <h3>
              Here are you're Week 1 training resources:
            </h3>

            <div style={listContainerStyle}>
              <div>Lorem</div>
              <div>Ipsum</div>
              <CardList />
            </div>  

            <footer>
              <span style={linkStyle}><Link to='/'>Home</Link></span>
              <span style={linkStyle}><Link to='/about'>About</Link></span>
              <span style={linkStyle}><Link to='/contact'>Contact</Link></span>
            </footer>
          </div>
        ) } } />
        <Route path='/about' exact render={ ()=> { return (
          <h3>
            About LifeDojo
          </h3>
        ) } } />
        <Route path='/contact' exact render={ ()=> { return (
          <h3>
            Contact Us
          </h3>
        ) } } />
        <Route path='/card/:cardId' component={Card}/>
      </div>
      </Router>
    );
  }
}

export default App;

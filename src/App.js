import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';

const Index = () => <h2>Home</h2>;
// const About = () => <h2>About me</h2>;
// const Contact = () => <h2>Contact</h2>;

const App= () => (
  <Router>
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Index} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />

    </div>
  </Router>
)



export default App;

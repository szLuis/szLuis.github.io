import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
// import './App.css';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Interests from './components/Interests';

const Index = () => <h2>Home</h2>;
// const About = () => <h2>About me</h2>;
// const Contact = () => <h2>Contact</h2>;

const App= () => (
  <Router>
    <div className="App">
    <div className="wrapper" >
        <div className="one circle"><Link to="/">Home</Link></div>
        <div className="two circle"><Link to="/skills">Skills</Link></div>
        <div className="three circle"><Link to="/contact">Contact</Link></div>
        <div className="four circle"><Link to="/interests">Interests</Link></div>
    </div>
      {/* <nav className="wrapper">
        <ul>
          <li className="one">
            <Link to="/">Home</Link>
          </li>
          <li className="two">
            <Link to="/skills">Skills</Link>
          </li>
          <li className="three">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="four">
            <Link to="/interests">Interests</Link>
          </li>
        </ul>
      </nav> */}

      <Route path="/" exact component={Index} />
      <Route path="/skills" component={Skills} />
      <Route path="/contact" component={Contact} />
      <Route path="/interests" component={Interests} />

    </div>
  </Router>
)



export default App;

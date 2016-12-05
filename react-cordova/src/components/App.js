import React from 'react';
import { Link } from 'react-router';
const App = (props) => (
  <div className="container">
    <h2>React Cordova Demo</h2>
    <nav className="navbar navbar-dark bg-primary">
      <div className="nav navbar-nav">
        <Link to='/' className="nav-item nav-link">Home</Link>
        <Link to='/features' className="nav-item nav-link">Features</Link>
        <Link to='/pricing' className="nav-item nav-link">Pricing</Link>
        <Link to='/about' className="nav-item nav-link">About</Link>
      </div>
    </nav>
    { props.children }
  </div>
);

export default App;
import React from 'react';
import Bootstrap from 'bootstrap';
import {NavBar, Nav} from 'react-bootstrap'
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav className="NavBar">
        <ol>
          <li>Home</li>
          <li>Portfolio</li>
          <li>Blog</li>
          <li>Contact</li>
        </ol>
      </nav>
    </div>
  );
}

export default App;

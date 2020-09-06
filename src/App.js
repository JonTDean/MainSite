// Libraries
import React from 'react';
import { Route, Switch } from "react-router-dom";

// Styling
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import HeaderNavBar from './components/Static/NavBar/HeaderNavBar';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      {/* NavBar */}
      <HeaderNavBar className="border border-primary" />

      {/* Router Logic */}
      <Switch>
        {/* Home Page Component Path */}
        <Route exact path="/">
          <Home />
        </Route>

        {/* Portfolio Page Component Path */}
        <Route exact path="/Portfolio">
          <Portfolio />
        </Route>

        {/* Blog Page Component Path */}
        <Route exact path="/Blog">
          <Blog />
        </Route>

        {/* Contact Page Component Path */}
        <Route exact path="/Contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

import React from 'react';
import { Route, Switch } from "react-router-dom";
import HeaderNavBar from './assets/Static/NavBar/HeaderNavBar';
import Home from './assets/Home/Home';
import Portfolio from './assets/Portfolio/Portfolio';
import Blog from './assets/Blog/Blog';
import Contact from './assets/Contact/Contact';

function App() {
  return (
    <div className="App">
      {/* NavBar */}
      <HeaderNavBar />

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

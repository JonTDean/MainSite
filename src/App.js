// Libraries
import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { loadReCaptcha } from 'react-recaptcha-google';

// Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/custom.scss';
import { AnimatePresence } from 'framer-motion';

// Components
import HeaderNavBar from './components/Static/NavBar/HeaderNavBar';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';

class App extends Component {

  pageVariant = {
    in: { 
      opacity: 2
     },
    out: {
      opacity: 0
    }
  };

  componentDidMount(){
    loadReCaptcha();
  }
  
  render(){
    return (
      <div className="App">
        {/* NavBar */}
        <HeaderNavBar className="border border-primary" />
        
        <AnimatePresence exitBeforeEnter>
          {/* Router Logic */}
          <Switch>
            {/* Home Page Component Path */}
            <Route exact path="/">
              <Home pageVariant={this.pageVariant} />
            </Route>
  
            {/* Portfolio Page Component Path */}
            <Route exact path="/Portfolio">
              <Portfolio pageVariant={this.pageVariant} />
            </Route>
  
            {/* Blog Page Component Path */}
            <Route exact path="/Blog">
              <Blog pageVariant={this.pageVariant} />
            </Route>
  
            {/* Contact Page Component Path */}
            <Route exact path="/Contact">
              <Contact pageVariant={this.pageVariant} />
            </Route>
          </Switch>
        </AnimatePresence>
      </div>
    );
  }

}

export default App;

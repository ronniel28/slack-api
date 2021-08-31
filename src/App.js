//TODO:
// Registration
// Login
// Send Message
// Retrieve Message
// Create Channel
// Get all users
// Get channel details via channel ID
// Add member to a channel
// List of All Users

import React, { useState } from 'react';
import LogInForm from './components/login/LogInForm';
import RegistrationForm from './components/registration/RegistrationForm';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import MainPage from './components/main/MainPage';
import Spinner from 'react-bootstrap/Spinner';

function App() {
  const [isLoggedIn, setIsLoggedIn]= useState(true);
  

  function toggleIsLoggedIn(){
    setIsLoggedIn(!isLoggedIn)
  }

  
  return (
    <Router>
    
      <Switch>
        <Route exact path="/">
          {isLoggedIn?(<MainPage toggleIsLoggedIn={toggleIsLoggedIn} />):(<LogInForm 
          toggleIsLoggedIn={toggleIsLoggedIn} />)}
        </Route>
        <Route path="/register">
          <RegistrationForm />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

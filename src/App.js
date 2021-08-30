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
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MainPage from './components/main/MainPage';
import Spinner from 'react-bootstrap/Spinner';

function App() {
  const [isLoggedIn, setIsLoggedIn]= useState(false);
  const [isLoading, setIsLoading]= useState(false);

  function toggleIsLoggedIn(){
    setIsLoggedIn(!isLoggedIn)
  }

  function setLoading(){
    setIsLoading(true);
  }
  return (
    <Router>
    
      <Switch>
        <Route exact path="/">
          {isLoggedIn?(isLoading?(<MainPage toggleIsLoggedIn={toggleIsLoggedIn} />):(<div className="bg-red-900">LOADING........</div>)):(<LogInForm 
          setLoading={setLoading}
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

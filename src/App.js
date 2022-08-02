import './App.css';
import React from 'react';
import NavbarComp from './components/navbarComp';
import Sign_in_card from './components/sign_in_card';
import Sign_Up from './components/sign_up.js';
import Dashboard from './components/dashboard';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarComp/>
        <Switch>
          <Route exact path='/'>
            <div className="sign_in_container">
              <Sign_in_card/>
            </div>
          </Route>
          <Route exact path='/createAccount' >
            <Sign_Up/>
          </Route>
          <Route exact path='/dashboard'>
            <Dashboard/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;

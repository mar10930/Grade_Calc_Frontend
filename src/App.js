import './App.css';
import React from 'react';
import NavbarComp from './components/navbarComp';
import Sign_in_card from './components/sign_in_card';
import Sign_Up from './components/sign_up.js';
import Dashboard from './components/dashboard';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {StudentContext} from './components/Objects/StudentContext';
import {useState} from 'react';

function App() {
  const [student,set_student] = useState(null);
  return (
    <Router>
      <div className="App">
        <NavbarComp/>
        <Switch>
          <StudentContext.Provider value={{student,set_student}}>
            <Route exact path='/'>
              <div className="sign_in_container">
                <Sign_in_card/>
              </div>
            </Route>
            <Route exact path='/createAccount' component={Sign_Up}>
            </Route>
            <Route exact path='/dashboard' component={Dashboard}>
            </Route>
          </StudentContext.Provider>
        </Switch>
      </div>
    </Router>
  );
}
export default App;

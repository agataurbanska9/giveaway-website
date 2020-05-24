import React from 'react';
import {Home} from './components/Home';
import {LogIn} from "./components/LogIn";
import {NewAccount} from "./components/NewAccount";

import {
    HashRouter,
    Switch,
    Route,
    Link
    // NavLink
} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <HashRouter>
          <div>
              <ul>
                  <li><Link to='/logowanie'>Zaloguj</Link></li>
                  <li><Link to='/rejestracja'>Załóż konto</Link></li>
                  <li><Link to='/'>Start</Link></li>
              </ul>
          </div>

          <Switch>
              <Route path='/logowanie' component={LogIn}/>
              <Route path='/rejestracja' component={NewAccount}/>
              <Route exact path='/' component={Home}/>
          </Switch>
      </HashRouter>
    </div>
  );
}

export default App;

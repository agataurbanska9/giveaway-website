import React from 'react';
import {Home} from './components/Home'
import {OddajRzeczy} from "./components/OddajRzeczy";
import {
    HashRouter,
    Switch,
    Route,
    Link,
    NavLink
} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <HashRouter>
          <div>
              <ul>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/oddaj-rzeczy'>oddaj rzeczy</Link></li>
                  {/*<li><Link to='/logowanie'>logowanie</Link></li>*/}
                  {/*<li><Link to='/rejestracja'>rejestracja</Link></li>*/}
                  {/*<li><Link to='/wylogowano'>wylogowano</Link></li>*/}
              </ul>
          </div>

          <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/oddaj-rzeczy' component={OddajRzeczy}/>
              {/*<Route exact path='/logowanie' component={Logowanie}/>*/}
              {/*<Route exact path='/rejestracja' component={Rejestracja}/>*/}
              {/*<Route exact path='/wylogowano' component={Wylogowano}/>*/}
          </Switch>

      </HashRouter>
    </div>
  );
}

export default App;

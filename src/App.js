import React from 'react';
import {NavBar} from "./components/NavBar";
import {Home} from "./components/Home";
import {LogIn} from "./components/LogIn";
import {NewAccount} from "./components/NewAccount";
import {HashRouter, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <>
          <NavBar/>
          <Switch>
            <Route path='/logowanie' component={LogIn}/>*/}
            <Route path='/rejestracja' component={NewAccount}/>
            <Route exact path='/' component={Home}/>
          </Switch>
        </>
      </HashRouter>
    </div>
  );
}

export default App;

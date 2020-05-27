import React from 'react';
import {LogIn} from "./LogIn";
import {NewAccount} from "./NewAccount";
import {Home} from "./Home";
import {
    HashRouter,
    Switch,
    Route,
    Link
    // NavLink
} from 'react-router-dom';

export function NavBar() {
    return (
        <nav className='nav'>
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
        </nav>
    );
}


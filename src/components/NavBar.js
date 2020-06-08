import React from 'react';
import {NavLink} from 'react-router-dom';
import {Link as LinkScroll} from 'react-scroll';

export function NavBar() {
    return (
            <nav className='container'>
                <div className='navbars'>
                    <ul className='nav--log'>
                        <li><NavLink to='/logowanie' activeClassName='selected'>Zaloguj</NavLink></li>
                        <li><NavLink to='/rejestracja' activeClassName='selected'>Załóż konto</NavLink></li>
                    </ul>
                    <ul className='nav--home'>
                        <li><NavLink to='/' activeClassName='selected--home'>Start</NavLink></li>
                        <li><LinkScroll
                            activeClass="active"
                            to="homeThreeColumns"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >O co chodzi?</LinkScroll></li>
                        <li><LinkScroll
                            activeClass="active"
                            to="homeAboutUs"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >O nas</LinkScroll></li>
                        <li><LinkScroll
                            activeClass="active"
                            to="homeHelp"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Fundacja i organizacje</LinkScroll></li>
                        <li><LinkScroll
                            activeClass="active"
                            to="homeContact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Kontakt</LinkScroll></li>
                    </ul>
                </div>
            </nav>
    );
}


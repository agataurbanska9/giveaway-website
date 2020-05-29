import React from 'react';
import {Link} from 'react-router-dom';
import {Link as LinkScroll} from 'react-scroll';

export function NavBar() {
    return (
            <nav className='container'>
                <div className='navbars'>
                    <ul className='nav--log'>
                        <li><Link to='/logowanie'>Zaloguj</Link></li>
                        <li><Link to='/rejestracja'>Załóż konto</Link></li>
                    </ul>
                    <ul className='nav--home'>
                        <li><Link to='/'>Start</Link></li>
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


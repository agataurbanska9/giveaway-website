import React from 'react';
import Scroll from 'react-scroll';
const ScrollLink = Scroll.ScrollLink


export function NavBar() {
    return (
        <nav className='nav' id='navbar'>

            <ScrollLink to='destination'
                        spy={true}
                        smooth={true}
                        duartion={500}
                        className='someclass'
                        activeClass = 'someactiveclass'>Text linka</ScrollLink>

            {/*<div className='nav--content'>*/}
            {/*    <ul className='nav--items'>*/}
            {/*        <li><a href='#contact'>Kontakt</a></li>*/}
            {/*    </ul>*/}
            {/*</div>*/}

        </nav>
    );

}


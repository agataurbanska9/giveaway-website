import React from 'react';
import decoration from '../assets/Decoration.svg';
import tshirt from '../assets/Icon-1.svg';
import shoppingbag from '../assets/Icon-2.svg';
import magnifier from '../assets/Icon-3.svg';
import arrows from '../assets/Icon-4.svg';

export function HomeSteps() {
    return (
        <section className='home home--steps container'>
            <div className='home--steps-text'>
                <p>Wystarczą 4 proste kroki</p>
                <img src={decoration} alt='Decoration'/>
            </div>
            <div className='home--steps-elements'>
                <div className='steps-element'>
                    <img src={tshirt} alt='T-shirt icon'/>
                    <p>Wybierz rzeczy</p>
                    <hr/>
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className='steps-element'>
                    <img src={shoppingbag} alt='Shopping bag icon'/>
                    <p>Spakuj je</p>
                    <hr/>
                    <p>skorzystaj z worków na śmieci</p>
                </div>
                <div className='steps-element'>
                    <img src={magnifier} alt='Magnifying glass icon'/>
                    <p>Zdecyduj komu chcesz pomóc</p>
                    <hr/>
                    <p>wybierz zaufane miejsce</p>
                </div>
                <div className='steps-element'>
                    <img src={arrows} alt='Arrows icon'/>
                    <p>Zamów rzeczy</p>
                    <hr/>
                    <p>kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <div className='home--steps-calltoaction'>
                <button className='btn btn--home-oddajrzeczy'>Oddaj rzeczy</button>
            </div>
        </section>


    )
}
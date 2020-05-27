import React from 'react';
import decoration from "../assets/Decoration.svg";

export function HomeHelp() {
    return (
        <section className='home home--help container' id='homeHelp'>
            <h3>Komu pomagamy?</h3>
            <img src={decoration} alt='Decoration'/>
            <div className='buttons'>
                <button className='btn btn--home-fundacje'>Fundacjom</button>
                <button className='btn btn--home-organizacje'>Organizacjom pozarządowym</button>
                <button className='btn btn--home-zbiorki'>Lokalnym zbiórkom</button>
            </div>
            <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
            <div>panel przewijany</div>
        </section>

    );
}